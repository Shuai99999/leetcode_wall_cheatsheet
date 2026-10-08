export const languages = [
  { key: 'python', label: 'Python' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'csharp', label: 'C#' },
]

const row = (operation, python, javascript, csharp) => ({ operation, python, javascript, csharp })

export const pages = [
  {
    id: 'collections',
    eyebrow: '01 · 基础容器',
    title: 'Core Collections',
    shortTitle: 'Array & Tuple',
    sections: [
      {
        title: 'Array / List',
        rows: [
          row('create', 'a = [1,2,3]', 'let a = [1,2,3]', 'new List<int>{1,2,3}'),
          row('length', 'len(a)', 'a.length', 'a.Count / arr.Length'),
          row('append', 'a.append(x)', 'a.push(x)', 'a.Add(x)'),
          row('pop end', 'a.pop()', 'a.pop()', 'a.RemoveAt(a.Count-1)'),
          row('insert', 'a.insert(i,x)', 'a.splice(i,0,x)', 'a.Insert(i,x)'),
          row('contains', 'x in a', 'a.includes(x)', 'a.Contains(x)'),
          row('index', 'a.index(x)', 'a.indexOf(x)', 'a.IndexOf(x)'),
          row('reverse', 'a.reverse()', 'a.reverse()', 'a.Reverse()'),
          row('sort asc', 'a.sort()', 'a.sort((a,b)=>a-b)', 'a.Sort()'),
          row('sort desc', 'a.sort(reverse=True)', 'a.sort((a,b)=>b-a)', 'a.Sort(); a.Reverse()'),
        ],
      },
      {
        title: 'Python Tuple',
        rows: [
          row('create', 't = (1,2,3)', '—', '—'),
          row('single item', 't = (1,)', '—', '—'),
          row('index', 't[0], t[-1]', '—', '—'),
          row('slice', 't[1:3]', '—', '—'),
          row('unpack', 'a,b = t', '—', '—'),
          row('count', 't.count(x)', '—', '—'),
          row('find index', 't.index(x)', '—', '—'),
          row('convert', 'list(t) / tuple(a)', '—', '—'),
          row('property', 'immutable', '—', '—'),
        ],
      },
    ],
  },
  {
    id: 'map-set-loops',
    eyebrow: '02 · 遍历与去重',
    title: 'Loops & Sets',
    shortTitle: 'Loops & Sets',
    sections: [
      {
        title: 'Loops',
        rows: [
          row('for value', 'for x in a:', 'for(const x of a)', 'foreach(var x in a)'),
          row('for index', 'for i in range(len(a)):', 'for(let i=0;i<a.length;i++)', 'for(int i=0;i<a.Count;i++)'),
          row('index + value', 'for i,x in enumerate(a):', 'for(const [i,x] of a.entries())', 'for(int i=0;i<a.Count;i++)'),
          row('reverse index', 'range(n-1,-1,-1)', 'for(let i=n-1;i>=0;i--)', 'for(int i=n-1;i>=0;i--)'),
          row('while', 'while cond:', 'while(cond)', 'while(cond)'),
        ],
      },
      {
        title: 'Set — Essentials',
        rows: [
          row('create', 's = set()', 'new Set()', 'new HashSet<int>()'),
          row('add', 's.add(x)', 's.add(x)', 's.Add(x)'),
          row('remove', 's.discard(x)', 's.delete(x)', 's.Remove(x)'),
          row('contains', 'x in s', 's.has(x)', 's.Contains(x)'),
          row('length', 'len(s)', 's.size', 's.Count'),
        ],
      },
    ],
  },
  {
    id: 'javascript-map',
    eyebrow: '03 · JavaScript 专页',
    title: 'JavaScript Map & Object',
    shortTitle: 'JS Map & Object',
    sections: [
      {
        title: 'Hash Map / Dictionary (JS Map)',
        badge: 'Map preserves key types',
        rows: [
          row('create', 'd = {}', 'const m = new Map()', 'new Dictionary<int,int>()'),
          row('set', 'd[k] = v', 'm.set(k,v)', 'd[k] = v'),
          row('get', 'd[k]', 'm.get(k)', 'd[k]'),
          row('default', 'd.get(k,0)', 'm.get(k) ?? 0', 'd.GetValueOrDefault(k,0)'),
          row('contains', 'k in d', 'm.has(k)', 'd.ContainsKey(k)'),
          row('delete', 'del d[k]', 'm.delete(k)', 'd.Remove(k)'),
          row('keys', 'd.keys()', 'm.keys()', 'd.Keys'),
          row('values', 'd.values()', 'm.values()', 'd.Values'),
          row('pairs', 'd.items()', 'm.entries()', 'foreach(var kv in d)'),
          row('length', 'len(d)', 'm.size', 'd.Count'),
          row('count +1', 'd[k]=d.get(k,0)+1', 'm.set(k,(m.get(k)??0)+1)', 'd[k]=d.GetValueOrDefault(k)+1'),
        ],
      },
      {
        title: 'Frequency Map — JS Object Only',
        badge: 'String / Symbol keys',
        rows: [
          row('create', 'freq = {}', 'const freq = {}', 'new Dictionary<int,int>()'),
          row('set', 'freq[k] = v', 'freq[k] = v', 'd[k] = v'),
          row('get', 'freq[k]', 'freq[k]', 'd[k]'),
          row('default', 'freq.get(k,0)', 'freq[k] ?? 0', 'd.GetValueOrDefault(k,0)'),
          row('count +1', 'freq[k]=freq.get(k,0)+1', 'freq[k]=(freq[k]??0)+1', 'd[k]=d.GetValueOrDefault(k)+1'),
          row('contains', 'k in freq', 'Object.hasOwn(freq,k)', 'd.ContainsKey(k)'),
          row('delete', 'del freq[k]', 'delete freq[k]', 'd.Remove(k)'),
          row('keys', 'freq.keys()', 'Object.keys(freq)', 'd.Keys'),
          row('values', 'freq.values()', 'Object.values(freq)', 'd.Values'),
          row('pairs', 'freq.items()', 'Object.entries(freq)', 'foreach(var kv in d)'),
          row('length', 'len(freq)', 'Object.keys(freq).length', 'd.Count'),
          row('iterate', 'for k,v in freq.items():', 'for(const [k,v] of Object.entries(freq))', 'foreach(var kv in d)'),
        ],
      },
    ],
    note: 'JS Object 的键会转成 string / Symbol；Map 会保留键的类型，例如 1 和 "1" 是两个不同的键。',
  },
  {
    id: 'strings',
    eyebrow: '04 · 文本与内置函数',
    title: 'Strings & Built-ins',
    shortTitle: 'Strings & Built-ins',
    sections: [
      {
        title: 'String',
        rows: [
          row('length', 'len(s)', 's.length', 's.Length'), row('lower', 's.lower()', 's.toLowerCase()', 's.ToLower()'),
          row('upper', 's.upper()', 's.toUpperCase()', 's.ToUpper()'), row('substring', 's[l:r]', 's.slice(l,r)', 's.Substring(l,r-l)'),
          row('find', 's.find(x)', 's.indexOf(x)', 's.IndexOf(x)'), row('split', 's.split()', "s.split(' ')", "s.Split(' ')"),
          row('trim both', 's.strip()', 's.trim()', 's.Trim()'), row('trim left', 's.lstrip()', 's.trimStart()', 's.TrimStart()'),
          row('trim right', 's.rstrip()', 's.trimEnd()', 's.TrimEnd()'), row('left align', 's.ljust(n)', 's.padEnd(n)', 's.PadRight(n)'),
          row('right align', 's.rjust(n)', 's.padStart(n)', 's.PadLeft(n)'), row('starts with', 's.startswith(x)', 's.startsWith(x)', 's.StartsWith(x)'),
          row('ends with', 's.endswith(x)', 's.endsWith(x)', 's.EndsWith(x)'), row('replace', 's.replace(a,b)', 's.replaceAll(a,b)', 's.Replace(a,b)'),
          row('join', "''.join(a)", "a.join('')", 'string.Join("",a)'), row('count', 's.count(x)', 's.split(x).length-1', 's.Split(x).Length-1'),
        ],
      },
      {
        title: 'Common Built-ins',
        rows: [
          row('max', 'max(a)', 'Math.max(...a)', 'a.Max()'), row('min', 'min(a)', 'Math.min(...a)', 'a.Min()'),
          row('sum', 'sum(a)', 'a.reduce((x,y)=>x+y,0)', 'a.Sum()'), row('absolute', 'abs(x)', 'Math.abs(x)', 'Math.Abs(x)'),
          row('infinity', "float('inf')", 'Infinity', 'int.MaxValue'), row('to integer', 'int(s)', 'Number(s)', 'int.Parse(s)'),
          row('to string', 'str(x)', 'String(x)', 'x.ToString()'),
        ],
      },
      {
        title: 'Character Checks',
        rows: [
          row('alphanumeric', 'c.isalnum()', '/[a-z0-9]/i.test(c)', 'char.IsLetterOrDigit(c)'),
          row('letter', 'c.isalpha()', '/[a-z]/i.test(c)', 'char.IsLetter(c)'),
          row('digit', 'c.isdigit()', '/[0-9]/.test(c)', 'char.IsDigit(c)'),
          row('char → code', 'ord(c)', 'c.charCodeAt(0)', '(int)c'),
          row('code → char', 'chr(n)', 'String.fromCharCode(n)', '(char)n'),
        ],
      },
    ],
  },
  {
    id: 'data-structures',
    eyebrow: '05 · 常用数据结构',
    title: 'Stack, Queue, Heap & Math',
    shortTitle: 'Stack, Queue & Heap',
    sections: [
      { title: 'Stack (LIFO)', rows: [row('create', 'st = []', 'let st = []', 'new Stack<int>()'), row('push', 'st.append(x)', 'st.push(x)', 'st.Push(x)'), row('pop', 'st.pop()', 'st.pop()', 'st.Pop()'), row('top', 'st[-1]', 'st.at(-1)', 'st.Peek()'), row('empty', 'not st', 'st.length === 0', 'st.Count == 0')] },
      { title: 'Queue (FIFO / BFS)', rows: [row('create', 'q = deque()', 'let q = []', 'new Queue<int>()'), row('enqueue', 'q.append(x)', 'q.push(x)', 'q.Enqueue(x)'), row('dequeue', 'q.popleft()', 'q.shift()', 'q.Dequeue()'), row('front', 'q[0]', 'q[0]', 'q.Peek()'), row('empty', 'not q', 'q.length === 0', 'q.Count == 0')] },
      { title: 'Heap / Priority Queue', rows: [row('create', 'h = []', 'custom heap', 'new PriorityQueue<int,int>()'), row('push', 'heapq.heappush(h,x)', 'heap.push(x)', 'pq.Enqueue(x,p)'), row('pop min', 'heapq.heappop(h)', 'heap.pop()', 'pq.Dequeue()'), row('peek min', 'h[0]', 'heap[0]', 'pq.Peek()'), row('max heap', 'push -x', 'custom comparator', 'priority = -x')] },
      { title: 'Math', rows: [row('sqrt', 'math.sqrt(x)', 'Math.sqrt(x)', 'Math.Sqrt(x)'), row('power', 'x ** 2', 'x ** 2', 'Math.Pow(x,2)'), row('floor', 'math.floor(x)', 'Math.floor(x)', 'Math.Floor(x)'), row('ceil', 'math.ceil(x)', 'Math.ceil(x)', 'Math.Ceiling(x)'), row('integer div', 'a // b', 'Math.floor(a/b)', 'a / b  // ints'), row('modulo', 'a % b', 'a % b', 'a % b')] },
    ],
  },
  {
    id: 'patterns',
    eyebrow: '06 · 解题模板',
    title: 'Algorithm Patterns',
    shortTitle: 'Algorithm Patterns',
    sections: [
      { title: 'Two Pointers', rows: [row('setup', 'l,r = 0,len(a)-1', 'let l=0,r=a.length-1;', 'int l=0,r=a.Count-1;'), row('loop', 'while l < r:', 'while(l < r){...}', 'while(l < r){...}'), row('move', 'l += 1; r -= 1', 'l++; r--;', 'l++; r--;')] },
      { title: 'Sliding Window', rows: [row('left', 'l = 0', 'let l = 0;', 'int l = 0;'), row('expand', 'for r in range(len(a)):', 'for(let r=0;r<a.length;r++)', 'for(int r=0;r<a.Count;r++)'), row('shrink', 'while bad: l += 1', 'while(bad) l++;', 'while(bad) l++;')] },
      { title: 'Binary Search', rows: [row('bounds', 'l,r=0,len(a)-1', 'let l=0,r=a.length-1;', 'int l=0,r=a.Length-1;'), row('loop', 'while l <= r:', 'while(l <= r){...}', 'while(l <= r){...}'), row('middle', 'm=(l+r)//2', 'm=Math.floor((l+r)/2)', 'm=l+(r-l)/2'), row('go right', 'l=m+1', 'l=m+1', 'l=m+1'), row('go left', 'r=m-1', 'r=m-1', 'r=m-1')] },
      { title: 'Frequency Map', rows: [row('init', 'freq = {}', 'let m = new Map()', 'new Dictionary<int,int>()'), row('count', 'freq[x]=freq.get(x,0)+1', 'm.set(x,(m.get(x)??0)+1)', 'd[x]=d.GetValueOrDefault(x)+1')] },
    ],
  },
  {
    id: 'complexity',
    eyebrow: '07 · 复杂度与选型',
    title: 'Big-O & Set Reference',
    shortTitle: 'Big-O & Reference',
    sections: [
      {
        title: 'Big-O Quick Check',
        rows: [row('array index', 'O(1)', 'O(1)', 'O(1)'), row('array search', 'O(n)', 'O(n)', 'O(n)'), row('hash lookup avg', 'O(1)', 'O(1)', 'O(1)'), row('binary search', 'O(log n)', 'O(log n)', 'O(log n)'), row('sorting', 'O(n log n)', 'O(n log n)', 'O(n log n)'), row('two pointers', 'O(n)', 'O(n)', 'O(n)'), row('sliding window', 'O(n)', 'O(n)', 'O(n)'), row('nested loops', 'O(n²)', 'O(n²)', 'O(n²)'), row('DFS / BFS', 'O(V+E)', 'O(V+E)', 'O(V+E)')],
      },
      {
        title: 'Set Operations — Extended',
        rows: [row('union', 'a | b', 'new Set([...a,...b])', 'a.Union(b)'), row('intersection', 'a & b', 'filter + b.has(x)', 'a.Intersect(b)'), row('difference', 'a - b', 'filter + !b.has(x)', 'a.Except(b)'), row('symmetric diff', 'a ^ b', 'union - intersection', 'a.SymmetricExceptWith(b)'), row('subset', 'a <= b', 'every(x=>b.has(x))', 'a.IsSubsetOf(b)'), row('superset', 'a >= b', 'every b item in a', 'a.IsSupersetOf(b)'), row('disjoint', 'a.isdisjoint(b)', '!some(x=>b.has(x))', '!a.Overlaps(b)')],
      },
      {
        title: 'Which Tool?',
        rows: [row('index / order', 'Array / List', 'Array', 'Array / List'), row('fast lookup', 'Set / dict', 'Set / Map', 'HashSet / Dictionary'), row('frequency', 'dict', 'Map', 'Dictionary'), row('unique values', 'set', 'Set', 'HashSet'), row('LIFO', 'list', 'Array', 'Stack'), row('FIFO / BFS', 'deque', 'Array', 'Queue'), row('repeat min/max', 'heapq', 'Heap', 'PriorityQueue'), row('sorted search', 'binary search', 'binary search', 'BinarySearch')],
      },
    ],
  },
]
