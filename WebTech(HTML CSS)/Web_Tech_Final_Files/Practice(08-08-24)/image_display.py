'''fptr1=open("image.jpeg","rb")
data=fptr1.read()
print(data)'''

'''fptr1=open("image.jpeg","rb")
data=fptr1.read()
fptr2=open("newimage.jpg","wb")
fptr2.write(data)
fptr1.close()
fptr2.close()
print("new image is created")'''

#tell()
fptr=open("names.txt","r")
pos=fptr.tell()
print(pos)
data=fptr.read(5)
print(data)
pos=fptr.tell()
print(pos)

fptr.seek(0)
pos=fptr.tell()
print(pos)
fptr.seek(10)
pos=fptr.tell()
print(pos)
