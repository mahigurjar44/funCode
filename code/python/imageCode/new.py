from rembg.bg import remove
import numpy as np
import io
from PIL import Image
from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True

input_path = '/home/mahajan/Downloads/L175982481MV_1.jpeg'
output_path = '/home/mahajan/Downloads/LK8930399_1newCode_new.png'
output_path1 = '/home/mahajan/Downloads/LK8930399_1newCodepa_new2.jpg'

# Uncomment the following line if working with trucated image formats (ex. JPEG / JPG)

f = np.fromfile(input_path)
result = remove(f)
img = Image.open(io.BytesIO(result)).convert("RGBA")
img.save(output_path)

new = Image.new(mode="RGBA",size=(1500,1500),color='#FFFFFF')
new.paste(img,mask=img)
new.convert('RGB').save(output_path1)