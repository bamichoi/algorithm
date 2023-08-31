n = int(input())
dir = input().split()

x, y = 1, 1

for d in dir:
  if d == "R" and y < n:
        y += 1
  elif d == "L" and y > 1:
        y -= 1
  elif d == "U" and x > 1:
        x -= 1
  elif d == "D" and x < n:
        x += 1

print(x, y)



# example 1
n = int(input())
x, y = 1, 1
plans = input().split()

move_types = ["L", "R", "U", "D"]
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for plan in plans:
     
     for i in range(len(move_types)):
          if plan == move_types[i]:
               nx = x + dx[i]
               ny = y + dy[i]
    
     if nx < 1 or ny < 1 or nx >n or ny > n:
        continue
     
     x,y = nx, ny


print(x, y)