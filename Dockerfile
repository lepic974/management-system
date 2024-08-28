#************************
# AUTHOR : YaniPay, SAS
# DATE : 2024-08-27
#************************

# BUILD FOR PRODUCTION

#***********BASE*************#
FROM node:20-alpine AS base
#ENV NODE_ENV="production"

#***********INSTALLER*************#
FROM base AS installer

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./start.sh ./start.sh
COPY --chown=node:node . .

RUN npm install --include=dev

ADD prisma prisma
RUN npx prisma generate

RUN npm run build

#***********PRUNNER*************#
FROM base AS prunner
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY ./package*.json ./

RUN npm prume --omit=dev

#***********RUNNER*************#
FROM base AS runner
WORKDIR /app
ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED=1

ENV TZ=Europe/Paris

RUN apk add --no-cache tzdata \
  && cp /usr/share/zoneinfo/$TZ /etc/localtime \
  && echo $TZ > /etc/timezone \
  && apk del tzdata

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system -- uid 1001 nextjs

COPY --chown=nextjs:nodejs --from=prunner /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --chown=nextjs:nodejs --from=prunner /app/.next/standalone ./
COPY --chown=nextjs:nodejs --from=prunner /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="127.0.0.1"



COPY --chown=nextjs:nodejs --from=prunner /app/package.json ./package.json
COPY --chown=nextjs:nodejs --from=installer /app/dist ./dist
COPY --chown=nextjs:nodejs --from=prunner /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs --from=prunner /app/prisma ./prisma
COPY --chown=nextjs:nodejs --from=installer /app/start.sh ./start.sh

#CMD [ "sh", "-c", "while :; do echo 'Container is running...'; sleep 60; done" ]

CMD ["sh", "start.sh"]
ENTRYPOINT ["start.sh"]