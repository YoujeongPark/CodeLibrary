import numpy as np
## Numpy Packages

#np.array
array_np = np.array([[2,3],[4,5]])
print("array_np",array_np)

"""
[[2 3]
[4 5]]
"""

# np.arange
mylist=np.arange(4,9,1)
print(mylist) #[4 5 6 7 8]

# np.zeros
x = np.zeros(500)
print(x)

# np.concatenate
x = np.array([[1,2],[3,4]])
y = np.array([[5,6],[7,8]])

z1 = np.concatenate((x,y), axis = 0)
z2 = np.concatenate((x,y), axis = 1)

print("z1값" , z1)

"""
z1값 [[1 2]
[3 4]
[5 6]
[7 8]]
"""
print("z1차원", z1.ndim, "z1행렬의 행과 열", z1.shape) #(4, 2)

print("z2값" , z2)
"""
z2값 [[1 2 5 6]
[3 4 7 8]]
"""
print("z2차원", z2.ndim, "z2행렬의 행과 열", z2.shape) #(2, 4)

# np.floor
answer1 = np.floor(3.5)
print(answer1)

# np.nanmean
# Compute the arithmetic mean along the specified axis, ignoring NaNs.
a = np.array([[1, np.nan], [3, 4]])
np.nanmean(a) # 2.6666666666666665
np.nanmean(a, axis=0) # array([2.,  4.])
np.nanmean(a, axis=1) # array([1.,  3.5]) # may vary


# List to Array
A = [100,200]
B = [50,0]
C = [350,100]

expression_data = [A,B,C]
array2d = np.array(expression_data)
print(array2d)
"""
[[100 200]
[ 50 0]
[350 100]]
"""

array = np.array(A)
print("A type", type(A)) # A type <class 'list'>
print(array2d.shape) #(3, 2)
print(type(array2d)) # <class 'numpy.ndarray'>
print(array2d.ndim) # 몇차원인지 알기 - 2dimension