def surfaceArea(A):
    H = len(A)
    W = len(A[0])
    
    xy = H*W*2
    xz = 0
    yz = 0
    
    for i in range(H):
        sumXZ = 0
        for j in range(W):
            if j == 0:
                sumXZ = sumXZ + A[i][j]
                if W-1 == 0:
                    sumXZ = sumXZ*2
                continue
            
            sumXZ = sumXZ + abs(A[i][j] - A[i][j-1])
            
            if j == W-1:
                sumXZ = sumXZ + A[i][j]
                print(sumXZ,A[i][j],i,j)

        xz = xz + sumXZ
    
    for j in range(W):
        sumYZ = 0
        for i in range(H):
            if i == 0:
                sumYZ = sumYZ + A[i][j]
                if H-1 == 0:
                    sumYZ = sumYZ*2
                continue
            
            sumYZ = sumYZ + abs(A[i][j] - A[i-1][j])
            
            if i == H-1:
                sumYZ = sumYZ + A[i][j]
                
        yz = yz + sumYZ
    
    totalPrice = (xy+xz+yz)
    
    return totalPrice