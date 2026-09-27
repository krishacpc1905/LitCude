// ============ DATA ============
// [leetcode number, title, difficulty, slug]
const DATA = [
["Sorting Techniques",[
  [912,"Sort an Array","Medium","sort-an-array"]
]],
["Arrays",[
  [26,"Remove Duplicates from Sorted Array","Easy","remove-duplicates-from-sorted-array"],
  [1752,"Check if Array Is Sorted and Rotated","Easy","check-if-array-is-sorted-and-rotated"],
  [283,"Move Zeroes","Easy","move-zeroes"],
  [268,"Missing Number","Easy","missing-number"],
  [485,"Max Consecutive Ones","Easy","max-consecutive-ones"],
  [136,"Single Number","Easy","single-number"],
  [1,"Two Sum","Easy","two-sum"],
  [75,"Sort Colors","Medium","sort-colors"],
  [169,"Majority Element","Easy","majority-element"],
  [53,"Maximum Subarray","Medium","maximum-subarray"],
  [121,"Best Time to Buy and Sell Stock","Easy","best-time-to-buy-and-sell-stock"],
  [2149,"Rearrange Array Elements by Sign","Medium","rearrange-array-elements-by-sign"],
  [31,"Next Permutation","Medium","next-permutation"],
  [128,"Longest Consecutive Sequence","Medium","longest-consecutive-sequence"],
  [73,"Set Matrix Zeroes","Medium","set-matrix-zeroes"],
  [48,"Rotate Image","Medium","rotate-image"],
  [54,"Spiral Matrix","Medium","spiral-matrix"],
  [560,"Subarray Sum Equals K","Medium","subarray-sum-equals-k"],
  [118,"Pascal's Triangle","Easy","pascals-triangle"],
  [229,"Majority Element II","Medium","majority-element-ii"],
  [15,"3Sum","Medium","3sum"],
  [18,"4Sum","Medium","4sum"],
  [56,"Merge Intervals","Medium","merge-intervals"],
  [88,"Merge Sorted Array","Easy","merge-sorted-array"],
  [645,"Set Mismatch","Easy","set-mismatch"],
  [493,"Reverse Pairs","Hard","reverse-pairs"],
  [152,"Maximum Product Subarray","Medium","maximum-product-subarray"]
]],
["Binary Search",[
  [704,"Binary Search","Easy","binary-search"],
  [35,"Search Insert Position","Easy","search-insert-position"],
  [34,"Find First and Last Position of Element in Sorted Array","Medium","find-first-and-last-position-of-element-in-sorted-array"],
  [33,"Search in Rotated Sorted Array","Medium","search-in-rotated-sorted-array"],
  [81,"Search in Rotated Sorted Array II","Medium","search-in-rotated-sorted-array-ii"],
  [153,"Find Minimum in Rotated Sorted Array","Medium","find-minimum-in-rotated-sorted-array"],
  [540,"Single Element in a Sorted Array","Medium","single-element-in-a-sorted-array"],
  [162,"Find Peak Element","Medium","find-peak-element"],
  [69,"Sqrt(x)","Easy","sqrtx"],
  [875,"Koko Eating Bananas","Medium","koko-eating-bananas"],
  [1482,"Minimum Number of Days to Make m Bouquets","Medium","minimum-number-of-days-to-make-m-bouquets"],
  [1283,"Find the Smallest Divisor Given a Threshold","Medium","find-the-smallest-divisor-given-a-threshold"],
  [1011,"Capacity To Ship Packages Within D Days","Medium","capacity-to-ship-packages-within-d-days"],
  [1539,"Kth Missing Positive Number","Easy","kth-missing-positive-number"],
  [410,"Split Array Largest Sum","Hard","split-array-largest-sum"],
  [774,"Minimize Max Distance to Gas Station","Hard","minimize-max-distance-to-gas-station"],
  [4,"Median of Two Sorted Arrays","Hard","median-of-two-sorted-arrays"],
  [74,"Search a 2D Matrix","Medium","search-a-2d-matrix"],
  [240,"Search a 2D Matrix II","Medium","search-a-2d-matrix-ii"],
  [1901,"Find a Peak Element II","Medium","find-a-peak-element-ii"]
]],
["Strings",[
  [1021,"Remove Outermost Parentheses","Medium","remove-outermost-parentheses"],
  [151,"Reverse Words in a String","Medium","reverse-words-in-a-string"],
  [1903,"Largest Odd Number in String","Easy","largest-odd-number-in-string"],
  [14,"Longest Common Prefix","Easy","longest-common-prefix"],
  [205,"Isomorphic Strings","Easy","isomorphic-strings"],
  [796,"Rotate String","Easy","rotate-string"],
  [242,"Valid Anagram","Easy","valid-anagram"],
  [451,"Sort Characters By Frequency","Medium","sort-characters-by-frequency"],
  [1614,"Maximum Nesting Depth of the Parentheses","Easy","maximum-nesting-depth-of-the-parentheses"],
  [13,"Roman to Integer","Easy","roman-to-integer"],
  [12,"Integer to Roman","Medium","integer-to-roman"],
  [8,"String to Integer (atoi)","Medium","string-to-integer-atoi"],
  [5,"Longest Palindromic Substring","Medium","longest-palindromic-substring"],
  [1781,"Sum of Beauty of All Substrings","Medium","sum-of-beauty-of-all-substrings"]
]],
["Linked List",[
  [876,"Middle of the Linked List","Easy","middle-of-the-linked-list"],
  [206,"Reverse Linked List","Easy","reverse-linked-list"],
  [141,"Linked List Cycle","Easy","linked-list-cycle"],
  [142,"Linked List Cycle II","Medium","linked-list-cycle-ii"],
  [234,"Palindrome Linked List","Easy","palindrome-linked-list"],
  [328,"Odd Even Linked List","Medium","odd-even-linked-list"],
  [19,"Remove Nth Node From End of List","Medium","remove-nth-node-from-end-of-list"],
  [237,"Delete Node in a Linked List","Medium","delete-node-in-a-linked-list"],
  [2,"Add Two Numbers","Medium","add-two-numbers"],
  [160,"Intersection of Two Linked Lists","Easy","intersection-of-two-linked-lists"],
  [61,"Rotate List","Medium","rotate-list"],
  [146,"LRU Cache","Medium","lru-cache"],
  [460,"LFU Cache","Hard","lfu-cache"],
  [25,"Reverse Nodes in k-Group","Hard","reverse-nodes-in-k-group"],
  [148,"Sort List","Medium","sort-list"],
  [21,"Merge Two Sorted Lists","Easy","merge-two-sorted-lists"],
  [23,"Merge k Sorted Lists","Hard","merge-k-sorted-lists"],
  [138,"Copy List with Random Pointer","Medium","copy-list-with-random-pointer"]
]],
["Recursion & Backtracking",[
  [78,"Subsets","Medium","subsets"],
  [90,"Subsets II","Medium","subsets-ii"],
  [39,"Combination Sum","Medium","combination-sum"],
  [40,"Combination Sum II","Medium","combination-sum-ii"],
  [131,"Palindrome Partitioning","Medium","palindrome-partitioning"],
  [60,"Permutation Sequence","Hard","permutation-sequence"],
  [46,"Permutations","Medium","permutations"],
  [51,"N-Queens","Hard","n-queens"],
  [37,"Sudoku Solver","Hard","sudoku-solver"],
  [139,"Word Break","Medium","word-break"],
  [79,"Word Search","Medium","word-search"]
]],
["Bit Manipulation",[
  [191,"Number of 1 Bits","Easy","number-of-1-bits"],
  [231,"Power of Two","Easy","power-of-two"],
  [338,"Counting Bits","Easy","counting-bits"],
  [137,"Single Number II","Medium","single-number-ii"],
  [260,"Single Number III","Medium","single-number-iii"],
  [29,"Divide Two Integers","Medium","divide-two-integers"],
  [371,"Sum of Two Integers","Medium","sum-of-two-integers"]
]],
["Stacks & Queues",[
  [225,"Implement Stack using Queues","Easy","implement-stack-using-queues"],
  [232,"Implement Queue using Stacks","Easy","implement-queue-using-stacks"],
  [20,"Valid Parentheses","Easy","valid-parentheses"],
  [155,"Min Stack","Medium","min-stack"],
  [496,"Next Greater Element I","Easy","next-greater-element-i"],
  [503,"Next Greater Element II","Medium","next-greater-element-ii"],
  [42,"Trapping Rain Water","Hard","trapping-rain-water"],
  [907,"Sum of Subarray Minimums","Medium","sum-of-subarray-minimums"],
  [735,"Asteroid Collision","Medium","asteroid-collision"],
  [2104,"Sum of Subarray Ranges","Medium","sum-of-subarray-ranges"],
  [402,"Remove K Digits","Medium","remove-k-digits"],
  [84,"Largest Rectangle in Histogram","Hard","largest-rectangle-in-histogram"],
  [85,"Maximal Rectangle","Hard","maximal-rectangle"],
  [239,"Sliding Window Maximum","Hard","sliding-window-maximum"],
  [901,"Online Stock Span","Medium","online-stock-span"]
]],
["Sliding Window & Two Pointer",[
  [3,"Longest Substring Without Repeating Characters","Medium","longest-substring-without-repeating-characters"],
  [1004,"Max Consecutive Ones III","Medium","max-consecutive-ones-iii"],
  [904,"Fruit Into Baskets","Medium","fruit-into-baskets"],
  [424,"Longest Repeating Character Replacement","Medium","longest-repeating-character-replacement"],
  [930,"Binary Subarrays With Sum","Medium","binary-subarrays-with-sum"],
  [1248,"Count Number of Nice Subarrays","Medium","count-number-of-nice-subarrays"],
  [1358,"Number of Substrings Containing All Three Characters","Medium","number-of-substrings-containing-all-three-characters"],
  [1423,"Maximum Points You Can Obtain from Cards","Medium","maximum-points-you-can-obtain-from-cards"],
  [992,"Subarrays with K Different Integers","Hard","subarrays-with-k-different-integers"],
  [76,"Minimum Window Substring","Hard","minimum-window-substring"]
]],
["Heaps",[
  [215,"Kth Largest Element in an Array","Medium","kth-largest-element-in-an-array"],
  [703,"Kth Largest Element in a Stream","Easy","kth-largest-element-in-a-stream"],
  [973,"K Closest Points to Origin","Medium","k-closest-points-to-origin"],
  [347,"Top K Frequent Elements","Medium","top-k-frequent-elements"],
  [295,"Find Median from Data Stream","Hard","find-median-from-data-stream"],
  [621,"Task Scheduler","Medium","task-scheduler"],
  [846,"Hand of Straights","Medium","hand-of-straights"],
  [355,"Design Twitter","Medium","design-twitter"]
]],
["Greedy Algorithms",[
  [455,"Assign Cookies","Easy","assign-cookies"],
  [860,"Lemonade Change","Easy","lemonade-change"],
  [678,"Valid Parenthesis String","Medium","valid-parenthesis-string"],
  [435,"Non-overlapping Intervals","Medium","non-overlapping-intervals"],
  [57,"Insert Interval","Medium","insert-interval"],
  [55,"Jump Game","Medium","jump-game"],
  [45,"Jump Game II","Medium","jump-game-ii"],
  [135,"Candy","Hard","candy"]
]],
["Binary Trees",[
  [94,"Binary Tree Inorder Traversal","Easy","binary-tree-inorder-traversal"],
  [144,"Binary Tree Preorder Traversal","Easy","binary-tree-preorder-traversal"],
  [145,"Binary Tree Postorder Traversal","Easy","binary-tree-postorder-traversal"],
  [102,"Binary Tree Level Order Traversal","Medium","binary-tree-level-order-traversal"],
  [104,"Maximum Depth of Binary Tree","Easy","maximum-depth-of-binary-tree"],
  [110,"Balanced Binary Tree","Easy","balanced-binary-tree"],
  [543,"Diameter of Binary Tree","Easy","diameter-of-binary-tree"],
  [124,"Binary Tree Maximum Path Sum","Hard","binary-tree-maximum-path-sum"],
  [100,"Same Tree","Easy","same-tree"],
  [103,"Binary Tree Zigzag Level Order Traversal","Medium","binary-tree-zigzag-level-order-traversal"],
  [987,"Vertical Order Traversal of a Binary Tree","Hard","vertical-order-traversal-of-a-binary-tree"],
  [199,"Binary Tree Right Side View","Medium","binary-tree-right-side-view"],
  [101,"Symmetric Tree","Easy","symmetric-tree"],
  [236,"Lowest Common Ancestor of a Binary Tree","Medium","lowest-common-ancestor-of-a-binary-tree"],
  [662,"Maximum Width of Binary Tree","Medium","maximum-width-of-binary-tree"],
  [863,"All Nodes Distance K in Binary Tree","Medium","all-nodes-distance-k-in-binary-tree"],
  [222,"Count Complete Tree Nodes","Medium","count-complete-tree-nodes"],
  [105,"Construct Binary Tree from Preorder and Inorder Traversal","Medium","construct-binary-tree-from-preorder-and-inorder-traversal"],
  [106,"Construct Binary Tree from Inorder and Postorder Traversal","Medium","construct-binary-tree-from-inorder-and-postorder-traversal"],
  [297,"Serialize and Deserialize Binary Tree","Hard","serialize-and-deserialize-binary-tree"],
  [114,"Flatten Binary Tree to Linked List","Medium","flatten-binary-tree-to-linked-list"]
]],
["Binary Search Trees",[
  [700,"Search in a Binary Search Tree","Easy","search-in-a-binary-search-tree"],
  [701,"Insert into a Binary Search Tree","Medium","insert-into-a-binary-search-tree"],
  [450,"Delete Node in a BST","Medium","delete-node-in-a-bst"],
  [230,"Kth Smallest Element in a BST","Medium","kth-smallest-element-in-a-bst"],
  [98,"Validate Binary Search Tree","Medium","validate-binary-search-tree"],
  [235,"Lowest Common Ancestor of a Binary Search Tree","Medium","lowest-common-ancestor-of-a-binary-search-tree"],
  [1008,"Construct Binary Search Tree from Preorder Traversal","Medium","construct-binary-search-tree-from-preorder-traversal"],
  [653,"Two Sum IV - Input is a BST","Easy","two-sum-iv-input-is-a-bst"],
  [99,"Recover Binary Search Tree","Medium","recover-binary-search-tree"],
  [333,"Largest BST Subtree","Medium","largest-bst-subtree"]
]],
["Graphs",[
  [547,"Number of Provinces","Medium","number-of-provinces"],
  [200,"Number of Islands","Medium","number-of-islands"],
  [733,"Flood Fill","Easy","flood-fill"],
  [994,"Rotting Oranges","Medium","rotting-oranges"],
  [542,"01 Matrix","Medium","01-matrix"],
  [130,"Surrounded Regions","Medium","surrounded-regions"],
  [1020,"Number of Enclaves","Medium","number-of-enclaves"],
  [127,"Word Ladder","Hard","word-ladder"],
  [126,"Word Ladder II","Hard","word-ladder-ii"],
  [785,"Is Graph Bipartite?","Medium","is-graph-bipartite"],
  [207,"Course Schedule","Medium","course-schedule"],
  [210,"Course Schedule II","Medium","course-schedule-ii"],
  [743,"Network Delay Time","Medium","network-delay-time"],
  [1091,"Shortest Path in Binary Matrix","Medium","shortest-path-in-binary-matrix"],
  [1631,"Path With Minimum Effort","Medium","path-with-minimum-effort"],
  [787,"Cheapest Flights Within K Stops","Medium","cheapest-flights-within-k-stops"],
  [1976,"Number of Ways to Arrive at Destination","Medium","number-of-ways-to-arrive-at-destination"],
  [1334,"Find the City With the Smallest Number of Neighbors at a Threshold Distance","Medium","find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"],
  [1584,"Min Cost to Connect All Points","Medium","min-cost-to-connect-all-points"],
  [1319,"Number of Operations to Make Network Connected","Medium","number-of-operations-to-make-network-connected"],
  [947,"Most Stones Removed with Same Row or Column","Medium","most-stones-removed-with-same-row-or-column"],
  [721,"Accounts Merge","Medium","accounts-merge"],
  [305,"Number of Islands II","Hard","number-of-islands-ii"],
  [827,"Making A Large Island","Hard","making-a-large-island"],
  [778,"Swim in Rising Water","Hard","swim-in-rising-water"],
  [1192,"Critical Connections in a Network","Hard","critical-connections-in-a-network"]
]],
["Dynamic Programming",[
  [70,"Climbing Stairs","Easy","climbing-stairs"],
  [198,"House Robber","Medium","house-robber"],
  [213,"House Robber II","Medium","house-robber-ii"],
  [62,"Unique Paths","Medium","unique-paths"],
  [63,"Unique Paths II","Medium","unique-paths-ii"],
  [64,"Minimum Path Sum","Medium","minimum-path-sum"],
  [120,"Triangle","Medium","triangle"],
  [931,"Minimum Falling Path Sum","Medium","minimum-falling-path-sum"],
  [416,"Partition Equal Subset Sum","Medium","partition-equal-subset-sum"],
  [2035,"Partition Array Into Two Arrays to Minimize Sum Difference","Hard","partition-array-into-two-arrays-to-minimize-sum-difference"],
  [322,"Coin Change","Medium","coin-change"],
  [494,"Target Sum","Medium","target-sum"],
  [518,"Coin Change II","Medium","coin-change-ii"],
  [1143,"Longest Common Subsequence","Medium","longest-common-subsequence"],
  [516,"Longest Palindromic Subsequence","Medium","longest-palindromic-subsequence"],
  [1312,"Minimum Insertion Steps to Make a String Palindrome","Hard","minimum-insertion-steps-to-make-a-string-palindrome"],
  [583,"Delete Operation for Two Strings","Medium","delete-operation-for-two-strings"],
  [1092,"Shortest Common Supersequence","Hard","shortest-common-supersequence"],
  [115,"Distinct Subsequences","Hard","distinct-subsequences"],
  [72,"Edit Distance","Medium","edit-distance"],
  [44,"Wildcard Matching","Hard","wildcard-matching"],
  [122,"Best Time to Buy and Sell Stock II","Medium","best-time-to-buy-and-sell-stock-ii"],
  [123,"Best Time to Buy and Sell Stock III","Hard","best-time-to-buy-and-sell-stock-iii"],
  [188,"Best Time to Buy and Sell Stock IV","Hard","best-time-to-buy-and-sell-stock-iv"],
  [309,"Best Time to Buy and Sell Stock with Cooldown","Medium","best-time-to-buy-and-sell-stock-with-cooldown"],
  [714,"Best Time to Buy and Sell Stock with Transaction Fee","Medium","best-time-to-buy-and-sell-stock-with-transaction-fee"],
  [300,"Longest Increasing Subsequence","Medium","longest-increasing-subsequence"],
  [368,"Largest Divisible Subset","Medium","largest-divisible-subset"],
  [1048,"Longest String Chain","Medium","longest-string-chain"],
  [673,"Number of Longest Increasing Subsequence","Medium","number-of-longest-increasing-subsequence"],
  [1547,"Minimum Cost to Cut a Stick","Hard","minimum-cost-to-cut-a-stick"],
  [312,"Burst Balloons","Hard","burst-balloons"],
  [132,"Palindrome Partitioning II","Hard","palindrome-partitioning-ii"],
  [1043,"Partition Array for Maximum Sum","Medium","partition-array-for-maximum-sum"],
  [1277,"Count Square Submatrices with All Ones","Medium","count-square-submatrices-with-all-ones"]
]],
["Tries",[
  [208,"Implement Trie (Prefix Tree)","Medium","implement-trie-prefix-tree"],
  [720,"Longest Word in Dictionary","Medium","longest-word-in-dictionary"],
  [421,"Maximum XOR of Two Numbers in an Array","Medium","maximum-xor-of-two-numbers-in-an-array"],
  [1707,"Maximum XOR With an Element From Array","Hard","maximum-xor-with-an-element-from-array"]
]],
["Strings (Hard)",[
  [1392,"Longest Happy Prefix","Hard","longest-happy-prefix"],
  [214,"Shortest Palindrome","Hard","shortest-palindrome"],
  [647,"Palindromic Substrings","Medium","palindromic-substrings"]
]]
];

// ============ STATE (persisted) ============
const STORAGE_KEY = 'a2z_tracker_state_v1';
let state = { done: {}, starred: {} };

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) state = JSON.parse(raw);
  }catch(e){ /* localStorage unavailable — falls back to in-memory state */ }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){ /* ignore */ }
}
function keyFor(slug){ return slug; }

loadState();

// ============ DOM refs ============
const main = document.getElementById('main');
const emptyState = document.getElementById('emptyState');
const topicFilter = document.getElementById('topicFilter');

let activeDiff = 'all';
let activeTopic = 'all';
let statusFilter = null; // 'starred' | 'done' | null
let query = '';

DATA.forEach(([topic]) => {
  const opt = document.createElement('option');
  opt.value = topic; opt.textContent = topic;
  topicFilter.appendChild(opt);
});

// ============ Totals ============
const ALL_ITEMS = [];
DATA.forEach(([topic, items]) => items.forEach(item => ALL_ITEMS.push({topic, item})));
const TOTAL = ALL_ITEMS.length;
let counts = {Easy:0, Medium:0, Hard:0};
ALL_ITEMS.forEach(({item}) => counts[item[2]]++);

document.getElementById('statEasy').innerHTML = `Easy <b>${counts.Easy}</b>`;
document.getElementById('statMedium').innerHTML = `Medium <b>${counts.Medium}</b>`;
document.getElementById('statHard').innerHTML = `Hard <b>${counts.Hard}</b>`;

function updateProgress(){
  const doneCount = Object.values(state.done).filter(Boolean).length;
  const starCount = Object.values(state.starred).filter(Boolean).length;
  const pct = TOTAL ? Math.round((doneCount/TOTAL)*100) : 0;

  document.getElementById('doneCount').innerHTML = `${doneCount}<span> / ${TOTAL} solved</span>`;
  document.getElementById('statStar').innerHTML = `Starred <b>${starCount}</b>`;

  const circle = document.getElementById('ringFg');
  const r = circle.r.baseVal.value;
  const c = 2 * Math.PI * r;
  circle.style.strokeDasharray = `${c}`;
  circle.style.strokeDashoffset = `${c - (pct/100)*c}`;
  document.getElementById('ringPct').textContent = pct + '%';
}

// ============ Render ============
function render(){
  main.innerHTML = '';
  let anyVisible = false;

  DATA.forEach(([topic, items], ti) => {
    if(activeTopic !== 'all' && activeTopic !== topic) return;

    const filtered = items.filter(([no, title, diff, slug]) => {
      const diffOk = activeDiff === 'all' || diff === activeDiff;
      const q = query.trim().toLowerCase();
      const qOk = !q || title.toLowerCase().includes(q) || String(no).includes(q);
      const isDone = !!state.done[keyFor(slug)];
      const isStar = !!state.starred[keyFor(slug)];
      const statusOk = !statusFilter || (statusFilter === 'done' ? isDone : isStar);
      return diffOk && qOk && statusOk;
    });

    if(filtered.length === 0) return;
    anyVisible = true;

    const topicDoneCount = items.filter(([,,,slug]) => state.done[keyFor(slug)]).length;
    const topicPct = Math.round((topicDoneCount/items.length)*100);

    const section = document.createElement('section');
    section.className = 'topic-section';

    const head = document.createElement('div');
    head.className = 'topic-head';
    head.innerHTML = `<span class="topic-num">${String(ti+1).padStart(2,'0')}</span>
      <h2>${topic}</h2>
      <span class="topic-progress"><i style="width:${topicPct}%"></i></span>
      <span class="topic-count">${topicDoneCount}/${items.length}</span>
      <span class="chevron">▾</span>`;
    head.addEventListener('click', () => section.classList.toggle('collapsed'));
    section.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'grid';

    filtered.forEach(([no, title, diff, slug]) => {
      const isDone = !!state.done[keyFor(slug)];
      const isStar = !!state.starred[keyFor(slug)];

      const card = document.createElement('div');
      card.className = 'card' + (isDone ? ' done' : '');
      card.style.setProperty('--diff-color', diff==='Easy' ? 'var(--easy)' : diff==='Medium' ? 'var(--medium)' : 'var(--hard)');

      const checkBtn = document.createElement('button');
      checkBtn.className = 'check-btn' + (isDone ? ' checked' : '');
      checkBtn.title = 'Mark as done';
      checkBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      checkBtn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        state.done[keyFor(slug)] = !isDone;
        saveState();
        render();
        updateProgress();
      });

      const starBtn = document.createElement('button');
      starBtn.className = 'star-btn' + (isStar ? ' active' : '');
      starBtn.title = 'Star this problem';
      starBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="${isStar ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><polygon points="12 2 15.09 8.63 22 9.24 16.5 13.97 18.18 21 12 17.27 5.82 21 7.5 13.97 2 9.24 8.91 8.63"/></svg>`;
      starBtn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        state.starred[keyFor(slug)] = !isStar;
        saveState();
        render();
        updateProgress();
      });

      const link = document.createElement('a');
      link.className = 'link';
      link.href = `https://leetcode.com/problems/${slug}/`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `<span class="lc-no">#${no}</span><span class="title">${title}</span><span class="badge ${diff}">${diff}</span>`;

      card.appendChild(checkBtn);
      card.appendChild(starBtn);
      card.appendChild(link);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    main.appendChild(section);
  });

  emptyState.style.display = anyVisible ? 'none' : 'block';
  if(!anyVisible) main.appendChild(emptyState);
}

// ============ Controls wiring ============
document.getElementById('diffPills').addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if(!pill) return;
  document.querySelectorAll('#diffPills .pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  activeDiff = pill.dataset.diff;
  render();
});

document.getElementById('statusPills').addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if(!pill) return;
  const val = pill.dataset.status;
  if(statusFilter === val){
    statusFilter = null;
    pill.classList.remove('active');
  } else {
    document.querySelectorAll('#statusPills .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    statusFilter = val;
  }
  render();
});

topicFilter.addEventListener('change', (e) => {
  activeTopic = e.target.value;
  render();
});

document.getElementById('search').addEventListener('input', (e) => {
  query = e.target.value;
  render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if(!confirm('Reset all progress and stars? This cannot be undone.')) return;
  state = { done: {}, starred: {} };
  saveState();
  render();
  updateProgress();
});

render();
updateProgress();
