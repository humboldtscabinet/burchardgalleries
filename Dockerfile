FROM nginx:1.27-alpine

# Remove default nginx html to ensure our index.htm is served
RUN rm -rf /usr/share/nginx/html/*

# Copy legacy static site to web root
COPY Internet/ /usr/share/nginx/html/

# Expose default HTTP port
EXPOSE 80
