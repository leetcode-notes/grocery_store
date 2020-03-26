(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{506:function(t,e,a){"use strict";a.r(e);var r=a(17),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"大数据专题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数据专题"}},[t._v("#")]),t._v(" 大数据专题")]),t._v(" "),a("h2",{attrs:{id:"常见题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见题目"}},[t._v("#")]),t._v(" 常见题目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("给40亿个不重复的 unsigned int 的整数，没排过序的，\n然后再给一个数，如何快速判断这个数是否在那 40 亿个数当中？\n")])])]),a("p",[t._v("一个整型 4 个字节，则 40 亿个整型的大小大约为 16G ， 直接放到内存进行二分查找是不行的。")]),t._v(" "),a("p",[t._v("如果有多个机器，可以哈希分桶，并行查找。")]),t._v(" "),a("p",[t._v("另外也可以使用位图。位图的内存高效 32 倍，因此总共大约只需要 500M 左右的空间即可。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("怎么在海量数据中找出重复次数最多的一个？\n")])])]),a("p",[t._v("A")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("数据基数\n")])])]),a("p",[t._v("HyperLogLog( "),a("strong",[t._v("HLL")]),t._v(" ) 与 布隆过滤器 都是针对大数据统计存储应用场景下的知名算法。")]),t._v(" "),a("p",[a("strong",[t._v("HyperLogLog")]),t._v(" "),a("a",{attrs:{href:"https://blockchain.iethpay.com/hyperloglog-theory.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理"),a("OutboundLink")],1),t._v(": 给定一个集合 S，对集合中的每一个元素，我们做一个哈希，假设生成一个 16 位的比特串，从所有生成的比特串中挑选出前面连续 0 次数最多的比特串，假设为 0000000011010110，连续 0 的次数为 8，因此我们可以估计该集合 S 的基数为 2^9。当然单独用这样的单一估计偶然性较大，导致误差较大，因此在实际的 HyperLogLog 算法中，采取分桶平均原理了来消除误差")]),t._v(" "),a("p",[t._v("特点：实现牺牲了一定的准确度（在一些场景下是可以忽略的），但却实现了空间复杂度上的极大的压缩，可以说是性价比很高的。")]),t._v(" "),a("p",[t._v("虽然基数不完全准确，但是可以符合，随着数量的递增，基数也是递增的。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lengyue1024/BAT_interviews/blob/master/%E5%A4%A7%E6%95%B0%E6%8D%AE%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试题及答案"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("网站元数据\n"+t._s(t.$page))])])}),[],!1,null,null,null);e.default=s.exports}}]);