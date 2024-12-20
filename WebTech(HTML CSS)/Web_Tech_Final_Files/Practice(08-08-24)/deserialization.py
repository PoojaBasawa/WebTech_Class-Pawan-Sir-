import pickle
class Employee:
    def __init__(self,name,age,sal,dept):
        self.ename=name
        self.eage=age
        self.esal=sal
        self.edept=dept
    def disp(self):
        print(self.ename)
        print(self.eage)
        print(self.esal)
        print(self.edept)
e=Employee("rama",25,50000,"developer")
f=open("employee.txt","rb")
pickle.load(f)
e.disp()
print("Object is stored in file")
f.close()