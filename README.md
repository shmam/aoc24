# aoc24
doing advent of code until I don't want to or forget (don't judge my solutions)

comparing runtimes using the following command
`./run.sh <day>`

```sh
$ ./run.sh 1  
Benchmark 1: ./1go
  Time (mean ± σ):       5.5 ms ±   0.5 ms    [User: 1.6 ms, System: 2.7 ms]
  Range (min … max):     4.7 ms …   6.0 ms    5 runs
 
Benchmark 2: node 1.js
  Time (mean ± σ):      27.1 ms ±   0.3 ms    [User: 20.8 ms, System: 4.4 ms]
  Range (min … max):    26.7 ms …  27.5 ms    5 runs
 
Benchmark 3: bun 1.js
  Time (mean ± σ):      16.5 ms ±   0.4 ms    [User: 11.5 ms, System: 4.5 ms]
  Range (min … max):    15.9 ms …  17.0 ms    5 runs
 
Summary
  ./1go ran
    2.98 ± 0.29 times faster than bun 1.js
    4.90 ± 0.47 times faster than node 1.js
```
