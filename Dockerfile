FROM nginx:1.27-alpine

# Remove default nginx html to ensure our index.htm is served
RUN rm -rf /usr/share/nginx/html/*

# Copy legacy static site to web root
COPY Internet/ /usr/share/nginx/html/

# Provide a template that listens on $PORT (Railway sets PORT)
RUN mkdir -p /etc/nginx/templates
COPY docker/default.conf.template /etc/nginx/templates/default.conf.template

# Expose default HTTP port (actual listen set by PORT env)
EXPOSE 80
