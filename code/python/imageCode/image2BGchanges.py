import cv2
import numpy as np
import mediapipe as mp
# load image
img = cv2.imread('/home/mahajan/Downloads/L272532481MV_1__.jpg')

# initialize mediapipe
mp_selfie_segmentation = mp.solutions.selfie_segmentation
selfie_segmentation = mp_selfie_segmentation.SelfieSegmentation(model_selection=1)

# convert to graky
RGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
results = selfie_segmentation.process(RGB)
mask = results.segmentation_mask
print(RGB)
  # show outputs
# cv2.imshow("mask", mask)
# cv2.imshow("Frame", img)
# cv2.imwrite('/home/mahajan/Downloads/transp_bckgrnd22.png', results)
# cv2.imwrite('/home/mahajan/Downloads/bckgrnd22mask.png', mask)