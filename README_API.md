## About the Project
This app contains images from public API that doesn't require an OAuth Key to access. From these images the only tokens that are available in manipulating the url is 'size: in i.e.(600/500) format which indicates length/width', 'grayscaled: i.e(600/500?grayscaled) which turns the image to black and white', 'blur: i.e.(600/500?blur)', 'random i.e(600/500?random=1)', 'mixed grayscaled and blur', 'webP format i.e.(600/500.webp)', '.jpg format' and 'v2/list'. However, the API doesnt give a token that specifies the categories of each images. I created an individual array for each categories by choosing the photos directly from its website and fetch its API and push it to its corresponding array category, say in this project, 'arrayNature[]', 'arrayPeople[]', 'arrayAnimals[]' and 'arrayBuildings[]'.

## Its Use
This app generates a simple slideshow of fading in and fading out images. First, the user will select the desired category then an image will pop out below. Those images where from their corresponding categories based on what the user just selected. Below the image is a button that says "Select this Image". After this button is clicked, the user will see images that were selected in the right side of the image. Those images have remove options individually by clicking the x button at the top right of each image.

Once the user stops selecting images, to convert those images to slideshow, the user must click "Start" button at the left side of the category pane. After clicking that button, the user can see the series of images at the buttom part of the page.

The maximum image that can be used for slide show is 20 images only. Each array containes 10 images.

## Constraints
Since the images are limited, I personally choose to limit the images to be converted to slidehow by half of the whole count of the images fetched so that the user can choose variety of images in a limited amount of number.

Nothing follows...

### API used
- [Lorem Picsum](https://picsum.photos/)