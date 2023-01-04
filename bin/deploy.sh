#!/bin/bash

EC2_INSTANCE="ec2-35-88-198-178.us-west-2.compute.amazonaws.com"
EC2_BUILD_DIR="/var/www/stories/html"
PEM_FILE="~/.ssh/particle-cms-1.pem"

#echo "Start build..."
npm run build

echo "Copy build to ec2"
scp -r -i $PEM_FILE ./build/* ubuntu@$EC2_INSTANCE:$EC2_BUILD_DIR

echo "Restart nginx"
ssh -i $PEM_FILE ubuntu@$EC2_INSTANCE << EOF

sudo service nginx restart

exit

EOF

echo "Done!"
exit