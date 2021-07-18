from PIL import Image
import numpy as np

##  Image Resize
img = Image.open("Lenna.png")

pix1 = np.array(img)  # pixcel value
width, height = img.size  # width , height
print(width, height)

resize_image = img.resize((500, 1000))  # Image Resize
pix2 = np.array(resize_image)
width, height = resize_image.size
print(width, height)
print(pix2)

outimg1 = Image.fromarray(pix1)
outimg2 = Image.fromarray(pix2)
# outimg1.show()
# outimg2.show()

##  uint9 Image
outimg = Image.fromarray(pix2.astype('uint8'))

##  RGBA to RGB
imgRGB = Image.open("Lenna.png").convert("RGB")

##  set Black Image
imgBlack = Image.open("Lenna.png").convert("L")

##  Pixel to Array
img = Image.open("Lenna.png").convert("RGB")
arrayPix = np.array(img)
print(arrayPix)

##  Array to Pixel
outImg = Image.fromarray(arrayPix)
outImg.show()
outImg.save("out.png")

## Image Slice
img_width_half = width/2
img_height_half = height/2
slicedArray = arrayPix[0:int(img_width_half), 0:int(img_height_half)]

## Array Flip
space1=arrayPix[0:int(img_width_half), 0:int(img_height_half)]
space1=np.flip(space1,0)

## Getpixcel
for i in range(width):
         for j in range(height):
               if img.getpixel((i,j)) != (254,39,18):
                       img.putpixel((i,j),(0,0,0))