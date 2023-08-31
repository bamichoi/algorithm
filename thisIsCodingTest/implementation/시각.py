n = int(input())

ans = 0

h, m, s = 0, 0, 0

while True:
    s += 1
    if s == 60:
        s = 0
        m += 1
    if m == 60:
        m = 0
        h += 1
    
    if any("3" in str(t) for t in [h, m, s]):
        ans += 1
    
    if h == n and m == 59 and s == 59:
        break

print(ans)