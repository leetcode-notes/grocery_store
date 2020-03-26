# 机器学习工业实践

**机器学习高效工程技巧**：

1. **对单批量过拟合**(Overfit a single batch)
   开始做其他事之前，确认模型能记住单批量标签并将损失快速归零；该过程很快，如果模型做不到，肯定是有问题。
2. **PyTorch 比 TF 更合适**
   没有静态图编译所以可以更快完成第一步；更容易用断言返回错误；更容易进入调试器调试张量(TF2.0 可能会解决其中一些问题，但仍然比较生涩)。
3. **用断言检验张量形状**(Assert tensor shapes)
   隐式 broadcasting/reduction 导致的张量形状错误，是最常见的隐式错误，(不管是 torch 还是 TF)对形状使用断言(Assert)，让错误尽早明朗；如果原来是在注释里声明张量形状，试着用断言形式。
4. **在持续集成过程中加入机器学习测试**(Add ML test to CI)
   如果不止一个入口点或多人协同工作，添加 N 步后检查损失的测试；要是只有一个人、一个入口点，在持续集成中添加机器学习测试可能有点过。
5. **使用 ipdb.set_trace()**
   机器学习作业很难在十秒内启动，维护起来太慢了；用 ipdb 工作流可以通过快速反馈回路了解 bug、张量值情况。
6. 用 nvvp 调试吞吐
   机器学习吞吐(每步花费时间)能帮我们发现错误、实现快速反馈；用 `torch.cuda.nvtx.range_push` 标记 nvvp 时间轴使之更可读。

nvvp
: Nvidia Visual Profile

在本地 PyCharm IDE 上使用远程服务器的 Python 解释器和环境进行调试和运行，同时能够很方便的将代码在本地和服务器上进行同步