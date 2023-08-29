# k 연속으로 더할 수 있는 회수
# m 총 연산 횟수
# n 배열의 크기

n, m, k = map(int, input().split())
data = list(map(int, input().split()))

# n = 5
# m = 8
# k = 3
# data = [2, 4, 5, 4, 6]
ans = 0 

data.sort();


a = m // k
b = m % k 

print(a, b)
ans = a * data[-1] * 3 + b * data[-2]

print(ans)


# example 1

first =  data[n-1]
second = data[n-2]

while True:
    for i in range(k):
        if m == 0:
            break;
        ans += first
        m -= 1

    if m ==0:
        break
    ans += second
    m -= 1

print(ans)


# example 2

first =  data[n-1]
second = data[n-2]

count = int ( m / (k +1 )) * k
count += m % (k + 1)

result = 0
result += count * first
result += m % (k +1)

print(result)