(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{573:function(t,s,a){"use strict";a.r(s);var i=a(17),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"variational-inference-变分推断-ignore-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variational-inference-变分推断-ignore-true"}},[t._v("#")]),t._v(" Variational Inference 变分推断 {ignore=true}")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("p",[t._v("在机器学习尤其是统计机器学习中，变分推断（VI）是逼近概率分布的重要手段，尤其用于贝叶斯建模中的后验概率分布逼近（另外一种逼近方法是采用随机的方法，例如 MCMC）")]),t._v(" "),a("p",[t._v("一言以蔽之，"),a("font",{attrs:{color:"red"}},[t._v("如何找相似分布")])],1),t._v(" "),a("p",[t._v("特点： 将推断变成了优化 (VI tures inference into Optimization)")]),t._v(" "),a("blockquote",[a("p",[t._v("Any procedure which uses optimization to approximate a density can be termed ``variational inference''.")])]),t._v(" "),a("p",[t._v("和极大似然法不同，VI 属于贝叶斯统计的范畴。")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("变分推断 针对的是有潜变量 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("Z")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Z")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")])])])]),t._v(" 的问题， 并且是在无法精确推断 "),a("a",{attrs:{href:"%E7%B2%BE%E7%A1%AE%E6%8E%A8%E6%96%AD%E6%97%A0%E6%B3%95%E6%88%90%E5%8A%9F%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%83%85%E5%86%B5%E6%98%AF%E5%BE%88%E5%A4%9A%E7%9A%84,%E4%BE%8B%E5%A6%82%EF%BC%8C%E5%AD%98%E5%9C%A8%E6%97%A0%E8%A7%A3%E6%9E%90%E8%A7%A3%E6%83%85%E5%86%B5%EF%BC%8C%E8%AE%A1%E7%AE%97%E9%87%8F%E8%BF%87%E5%A4%A7%E7%9A%84%E6%83%85%E5%86%B5"}},[t._v("^1")]),t._v("的情况下。")]),t._v(" "),a("p",[t._v("高维数据的采样为何如此困难？")]),t._v(" "),a("h2",{attrs:{id:"基本框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本框架"}},[t._v("#")]),t._v(" 基本框架")]),t._v(" "),a("p",[t._v("为了计算 后验分布 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("p")]),a("mo",[t._v("(")]),a("mi",[t._v("z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p ( z | x )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", 根据贝叶斯公式，需要计算 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("p")]),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mo",[t._v("∫")]),a("mi",[t._v("p")]),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("z")]),a("mo",[t._v(")")]),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")])],1),a("mi",[t._v("z")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p ( x ) = \\int p ( x , z ) \\mathrm { d } z")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.805em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.11112em","vertical-align":"-0.30612em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"op-symbol small-op mop",staticStyle:{"margin-right":"0.19445em",top:"-0.0005599999999999772em"}},[t._v("∫")]),a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("d")])]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")])])])]),t._v(", 但是这个积分往往是不可计算( intractable)的， 那么，一个自然的想法是：引入一组参数化的分布 \\mathcal { D } = \\left\\\\{ q _ { \\theta } ( z ) \\right\\\\}（称为 variational distributions，其中 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("θ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\theta")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")])])])]),t._v(" 称为 variational parameters），通过在 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[t._v("D")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{D}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])])]),t._v(" 里面寻找与 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("p")]),a("mo",[t._v("(")]),a("mi",[t._v("z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p(z|x)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 最“相似”的 distribution 来估计真实的 posterior")]),t._v("\nP ( z | x ) = \\frac { P ( x , z ) } { P ( x ) } \\\\\\\nP ( x ) = \\frac { P ( x , z ) } { P ( z | x ) } \\\\\\\n\n\\begin{align}\n\\ln P ( x ) & = \\ln P ( x , z ) - \\ln P ( z | x ) \\\\\\\n& = \\ln P ( x , z ) - \\ln Q ( z ) - \\ln \\frac { P ( z | x ) } { Q ( z ) }\n\\end{align}\n\n\\begin{align}\n\\int _ { z } \\ln P ( x ) Q ( z ) d z & = \\ln P ( x ) \\\\\\\n& = \\underbrace { \\int _ { z } \\ln P ( x , z ) Q ( z ) d z - \\int _ { z } \\ln Q ( z ) Q ( z ) d z} _ { ELBO } - \\underbrace{ \\int _ { z } \\frac { P ( z | x ) } { Q ( z ) } Q ( z ) d z } _ {K L ( Q \\| P )}\n\\end{align}\n\n"),a("p",[t._v("这就可以写成下面的优化问题：")]),t._v("\n\\theta ^ { * } = \\arg \\min _ { \\theta } \\mathrm { KL } \\left( q _ { \\theta } ( z ) \\| p ( z | x ) \\right) \\tag {1} \\label {1}\n\n"),a("p",[t._v("\\eqref{1}式 也不好求，因为里面含有我们的目标函数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("p")]),a("mo",[t._v("(")]),a("mi",[t._v("z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p ( z | x )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，但可以证明，minimize \\eqref{1} 等价于 maximize 所谓的 ELBO（evidence lower bound），即")]),t._v("\n\\theta ^ { * } = \\underset { \\theta } { \\arg \\max } \\mathbb { E } _ { q } \\left[ \\log p ( x , z ) - \\log q _ { \\theta } ( z ) \\right]\n\n"),a("p",[t._v("以上就是整个 variational inference (VI)的框架了。")]),t._v(" "),a("h2",{attrs:{id:"平均场理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平均场理论"}},[t._v("#")]),t._v(" 平均场理论")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("q")]),a("mo",[t._v("(")]),a("mi",[t._v("Z")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("msubsup",[a("mo",[t._v("∏")]),a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("mrow",[a("mi",[t._v("M")])],1)],1),a("msub",[a("mi",[t._v("q")]),a("mrow",[a("mi",[t._v("i")])],1)],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("msub",[a("mi",[t._v("Z")]),a("mrow",[a("mi",[t._v("i")])],1)],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("q ( Z ) = \\prod _ { i = 1 } ^ { M } q _ { i } \\left( Z _ { i } \\right)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.8283360000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.106005em","vertical-align":"-1.277669em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"1.1776689999999999em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),a("span",{staticStyle:{top:"-0.000005000000000143778em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",[a("span",{staticClass:"op-symbol large-op mop"},[t._v("∏")])])]),a("span",{staticStyle:{top:"-1.2500050000000003em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07153em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v(")")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/31032863",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎： 请解释下变分推断"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);