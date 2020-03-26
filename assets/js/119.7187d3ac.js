(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{545:function(e,t,a){"use strict";a.r(t);var r=a(17),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模型压缩精简-ignore-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型压缩精简-ignore-true"}},[e._v("#")]),e._v(" 模型压缩精简 {ignore=true}")]),e._v(" "),a("p",[e._v("[TOC]")]),e._v(" "),a("p",[e._v("工业上，一些在线模型，对响应时间提出非常严苛的要求，从而一定程度上限制了模型的复杂程度。模型复杂程度的限制可能会导致模型学习能力的降低从而带来效果的下降。")]),e._v(" "),a("p",[e._v("目前有 3 种思路来解决这个问题")]),e._v(" "),a("ol",[a("li",[e._v("通过压缩、编码等方式减小网络规模。量化是最广泛采用的压缩方法之一。")]),e._v(" "),a("li",[e._v("设计更有效的网络架构，用相对较小的模型尺寸达到可接受准确度，例如 MobileNet 和 SequeezeNet。")])]),e._v(" "),a("p",[e._v("参数剪枝和共享，低秩分解和稀疏性，传递/紧凑卷积滤波器和知识蒸馏等。")]),e._v(" "),a("h2",{attrs:{id:"压缩精简方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩精简方法"}},[e._v("#")]),e._v(" 压缩精简方法")]),e._v(" "),a("p",[e._v("量化有若干相似的术语。低精度（Low precision）可能是最通用的概念。常规精度一般使用 FP32（32 位浮点，单精度）存储模型权重；低精度则表示 FP16（半精度浮点），INT8（8 位的定点整数）等等数值格式。不过目前低精度往往指代 INT8。")]),e._v(" "),a("p",[e._v("混合精度（Mixed precision）在模型中使用 FP32 和 FP16 。 FP16 减少了一半的内存大小，但有些参数或操作符必须采用 FP32 格式才能保持准确度。")]),e._v(" "),a("p",[e._v("另外一个想法是如何压缩整个模型而非存储一个元素的位数。")]),e._v(" "),a("h3",{attrs:{id:"sequeezenet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequeezenet"}},[e._v("#")]),e._v(" SequeezeNet")]),e._v(" "),a("p",[e._v("使用一部分 1\\times1 卷积代替 3\\times3 卷积，它对标的模型是AlexNet。")]),e._v(" "),a("h3",{attrs:{id:"mobilenetv1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobilenetv1"}},[e._v("#")]),e._v(" MobileNetV1")]),e._v(" "),a("p",[a("strong",[e._v("深度可分离卷积")])]),e._v(" "),a("h3",{attrs:{id:"xception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xception"}},[e._v("#")]),e._v(" Xception")]),e._v(" "),a("h3",{attrs:{id:"二进制神经网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制神经网络"}},[e._v("#")]),e._v(" 二进制神经网络")]),e._v(" "),a("h3",{attrs:{id:"三元权重网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三元权重网络"}},[e._v("#")]),e._v(" 三元权重网络")]),e._v(" "),a("p",[e._v("权重约束为 +1, 0 和 -1 的神经网络")]),e._v(" "),a("h3",{attrs:{id:"shufflenet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shufflenet"}},[e._v("#")]),e._v(" ShuffleNet")]),e._v(" "),a("h3",{attrs:{id:"mixed-precision-training-of-deep-neural-networks-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixed-precision-training-of-deep-neural-networks-。"}},[e._v("#")]),e._v(" Mixed-Precision Training of Deep Neural Networks 。")]),e._v(" "),a("h3",{attrs:{id:"mobilenetv1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobilenetv1-2"}},[e._v("#")]),e._v(" MobileNetV1")]),e._v(" "),a("p",[e._v("仅为 4.8MB，这甚至比大多数 GIF 动图还要小！从而可以轻松地部署在任何移动平台上。")]),e._v(" "),a("h3",{attrs:{id:"rocket-training"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocket-training"}},[e._v("#")]),e._v(" Rocket Training")]),e._v(" "),a("p",[e._v("阿里巴巴\n利用复杂的模型来辅助一个精简模型的训练，测试阶段，利用学习好的小模型来进行推断。")]),e._v(" "),a("h3",{attrs:{id:"知识蒸馏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识蒸馏"}},[e._v("#")]),e._v(" 知识蒸馏")]),e._v(" "),a("p",[e._v("knowledge distilling")]),e._v(" "),a("p",[e._v("将复杂模型(teacher)的知识迁移到简单模型(student)中去，这样相当于在保持精度的同时减少了模型的复杂度，然后简单模型可以直接开跑，不需要像之前做量化那样做定点化了。")]),e._v(" "),a("h3",{attrs:{id:"_2019-icml-google-efficientnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-icml-google-efficientnet"}},[e._v("#")]),e._v(" 2019-ICML-Google-EfficientNet")]),e._v(" "),a("p",[a("a",{attrs:{href:""}},[e._v("EfficientNet")]),e._v(": Rethinking Model Scaling for Convolutional Neural Networks")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://arxiv.org/abs/1710.09282",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Survey of Model Compression and Acceleration for Deep Neural Networks"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);