x, y = map(int, input.split())

ans = 0

for i in range(x):
    arr = list(map(int, input().split()))
    pick = min(arr)
    if ans < pick:
        ans = pick

print(ans)