# A simple and lightweight Docker container for building the Hello Friend Hugo Theme
#
# To use:
# First, build a Docker image:
#  $ cd themes/hello-friend
#  $ docker build . --tag <some_tag_name>
#
# Now, to rebuild the theme:
#  $ cd themes/hello-friend
#  $ docker run -it \
#    --mount type=bind,source="$(pwd)",destination=/hello-friend \
#    <some_tag_name>:latest
#
# The newly built theme files will be written back into the theme directory
# through the magic of Docker bind mounts

FROM alpine:latest

# You must rebuild the Docker image if you modify either of these files
ADD package.json yarn.lock ./

RUN apk add --no-cache npm && \
    npm install --global husky yarn && \
    npm install --global && \
    npx browserslist@latest --update-db && \
    yarn

WORKDIR /hello-friend

# This is executed each time you `docker run` the container
ENTRYPOINT [ "npx", "webpack", "--mode=production" ]
