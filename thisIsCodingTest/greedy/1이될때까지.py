x, y = map(int, input().split())

ans = 0

while x != 1:
  if x % y == 0:
    x //= y
  else:
    x -= 1
  ans += 1    

print(ans)