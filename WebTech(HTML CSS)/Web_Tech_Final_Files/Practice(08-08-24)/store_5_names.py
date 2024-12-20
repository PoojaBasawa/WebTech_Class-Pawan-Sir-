'''#5 values have been stored in a notepad
print("Enter a filename")
fname=input()
fptr=open(fname,"a")
for data in range(5):
    print("Enter a name")
    name=input()
    fptr.write(name+"\n")
fptr.close()
print("5 names written to file")'''

#new values will store in same value old data will be erased
print("Enter a filename")
fname=input()
fptr=open(fname,"w")
for data in range(2):
    print("Enter a name")
    name=input()
    print("Enter ID")
    ID=input()
    print("Enter Salary")
    Salary=input()
    print("Enter location")
    location=input()
    data=name+" "+ID+" "+Salary+" "+location
    fptr.write(data + "\n")
fptr.close()
print("emp info is stored in file")

print("Enter a filename")
fname=input()
fptr=open(fname,"r")
data=fptr.read()
print(data)
data=fptr.read(15)
print(data)
data=fptr.readline()
print(data)
data=fptr.readlines()
print(data)