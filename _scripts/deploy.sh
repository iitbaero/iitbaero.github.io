# Just to make sure
gem install bundler

# Install bundles if needed.
bundle check || bundle install

# Build site
bundle exec jekyll build

# Checkout `master` and remove everything.
git clone https://${GH_TOKEN}@github.com/iitbaero/iitbaero.github.io.git ../iitbaero.github.io.master
cd ../iitbaero.github.io.master
git checkout master
rm -rf *

# Make sure .nojekyll exists
touch .nojekyll

# Copy generated files here
cd -
cp -r _site/* ../iitbaero.github.io.master/
cd -

git config user.email ${GH_EMAIL}
git config user.name "Deployment Bot"

# Commit and push generated content to `master` branch.
git add -A .
git status
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --quiet origin `master` > /dev/null 2>&1
