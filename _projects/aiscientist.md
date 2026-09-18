---
layout: page
title: "⚛️ AI Scientist: Automating Research"
description: Large-scale AI systems that do research autonomously. We treat invention itself as an engineering problem.
img: assets/img/ai-scientist/banners/banner-1920x1080.png # card thumbnail (works on light and dark)
hide_header_img: true # the page shows the theme-aware lockup below instead
og_image: https://arnoutdevos.github.io/assets/img/ai-scientist/og-image.png
importance: 1
date: 2026-12-31 # ongoing flagship project: dated in the future so it sorts first
category: [research]
selected: true
---

<div class="project-brand">
  <img src="/assets/img/ai-scientist/lockup-stacked/lockup-black-2x.png" class="only-light" alt="AI Scientist — Automating Research">
  <img src="/assets/img/ai-scientist/lockup-stacked/lockup-white-2x.png" class="only-dark" alt="AI Scientist — Automating Research">
</div>

We develop large-scale AI systems that do research autonomously, towards an AI Scientist. If discovery is a process, it can be studied, systematized, and engineered — as was done with computation (<a href="#ref-turing1936" class="cite">Turing, 1936</a>; <a href="#ref-vonneumann1945" class="cite">von Neumann, 1945</a>) and, more recently, with language (<a href="#ref-vaswani2017" class="cite">Vaswani et al., 2017</a>; <a href="#ref-ouyang2022" class="cite">Ouyang et al., 2022</a>). We treat invention itself as an engineering problem.

Engineering needs a decomposition and something to measure. Ours is Karl Popper's schema of how knowledge grows — **problem → tentative theory → error elimination → new problem** (<a href="#ref-popper1972" class="cite">Popper, 1972</a>). Each arrow is a component we can build, evaluate, and improve.

## Why now

In the past few years, autonomous research has gone from aspiration to peer-reviewed systems, one component at a time:

- **Search with automatic verification.** *FunSearch* (<a href="#ref-romera2024" class="cite">Romera-Paredes et al., 2024</a>) and *AlphaEvolve* (<a href="#ref-novikov2025" class="cite">Novikov et al., 2025</a>) pair a language model that proposes programs with an evaluator that scores them, and iterate at scale. Results include new constructions in combinatorics, a faster algorithm for 4×4 complex matrix multiplication, and scheduling heuristics running in production data centers.
- **Hypothesis generation at scale.** *Co-Scientist* (<a href="#ref-gottweis2026" class="cite">Gottweis et al., 2026</a>): specialized agents generate, critique, rank (Elo tournaments, simulated scientific debate), and evolve hypotheses, with most compute spent verifying claims against the literature and databases. Tested with researchers at 100+ institutions, it produced experimentally validated leads in areas including drug repurposing, antimicrobial resistance, and liver fibrosis.
- **End-to-end automation.** *The AI Scientist* (<a href="#ref-lu2026" class="cite">Lu et al., 2026</a>) chains ideation, coding, experiments, analysis, manuscript writing, and self-review; a machine-written paper passed first-round review at a workshop of a top machine-learning conference.
- **Prior work as executable agents.** *Paper2Agent* (<a href="#ref-miao2026" class="cite">Miao et al., 2026</a>) turns a paper's code, data, and workflows into a Model Context Protocol server (<a href="#ref-anthropic2024" class="cite">Anthropic, 2024</a>) that a coding agent can call — prior work becomes runnable rather than merely readable, and agents built from different papers can be composed on a new question.
- **Self-improving search.** *Dream-RSI* (<a href="#ref-zheng2026" class="cite">Zheng et al., 2026</a>) replays a run's own discovery history as a free simulator to test alternative exploration policies — what to branch on, how much to parallelize, when to stop — and redeploys the best one. The discovery agent stays fixed; the *strategy for exploring ideas* improves recursively, reaching equal quality with 1.7–2.4× fewer agent calls or generations, and over 50× less budget in one optimization setting.

The ingredients exist, including capable foundation models, agentic scaffolding, tool use, verification, and now meta-level search. What is missing is combining them at the scale, openness, and rigor that real science demands — what has been called the fifth paradigm of discovery (<a href="#ref-msr2022" class="cite">Microsoft Research, 2022</a>), after experiment, theory, simulation, and data.

## Engineering the loop

- **Tentative theory → generate.** Foundation models make candidate hypotheses, code, and experimental designs cheap. Generation is no longer the main bottleneck; *deciding what to generate next* is. That decision lives in the search policy and the harness around the model, and both can be optimized in several ways, including by replaying history (<a href="#ref-zheng2026" class="cite">Zheng et al., 2026</a>), by letting models optimize their own prompts (<a href="#ref-yang2024" class="cite">Yang et al., 2024</a>; <a href="#ref-agrawal2025" class="cite">Agrawal et al., 2025</a>), and by end-to-end harness search (<a href="#ref-lee2026" class="cite">Lee et al., 2026</a>) — the harness around a fixed model can move results on the same benchmark by up to 6×.
- **Error elimination → verify.** Whatever is verifiable will likely be automated — reinforcement learning from verifiable rewards already drives reasoning ability (<a href="#ref-deepseek2025" class="cite">DeepSeek-AI, 2025</a>) — so the leverage is in automating verification rather than doing it by hand, including executable tests, reproductions, held-out evaluation, and reward models learned from several kinds of feedback at once (<a href="#ref-baur2026" class="cite">Baur et al., 2026</a>). As in Co-Scientist, most compute should go to checking, not generating. And a verifier must measure what we actually want: solved problems are a proxy for understanding, and optimizing the proxy alone loses the goal (<a href="#ref-tao2026" class="cite">Tao, 2026</a>).
- **New problem → the scientist stays in the loop.** A cycle ends with a sharper question, not a finished answer. Domain experts decide which questions matter; the system runs the cycle at a scale and speed no single lab can.

## Where this comes from

Each step of the loop has been done by hand before, including in our own earlier work:

- **Pre-registration.** Committing the hypothesis and experimental plan *before* seeing results, and having them reviewed on that basis (<a href="#ref-devos2021" class="cite">Devos &amp; Dandi, 2021</a>), is the tentative-theory step made explicit. An AI Scientist should be held to the same standard: a plan that can be inspected before it runs.
- **Reproducibility.** Independently re-implementing and re-running a published method (<a href="#ref-devos2019" class="cite">Devos et al., 2019</a>) is error elimination by hand; in that case it led the original authors to update their paper and release code. It is exactly the check we now want to automate.
- **Deployment across disciplines.** In ETH's [Data Science Lab](/teaching/), student teams take on machine-learning problems "in the wild", posed by domain experts in academia, industry, and startups across fields. That is the grounding an AI Scientist needs: real problems, real data, and someone who can judge the answer.

## Design choices

- **Large-scale.** Research is an iterative, embarrassingly parallel search over hypotheses and experiments, so the system is designed to run and judge thousands of them concurrently — on CSCS's Alps supercomputer, with the distributed training and inference skills taught in ETH's [Large-Scale AI Engineering](/projects/largescaleaiengineering/) course.
- **Open.** Scientific claims must be inspectable and reproducible, so the stack is open wherever it can be: open foundation models such as Apertus (<a href="#ref-swissai2025" class="cite">Swiss AI Initiative, 2025</a>), open code, and open evaluations, so that results can be checked and built on by others.
- **Grounded.** An AI Scientist is only as useful as the problems it is pointed at. We work with domain experts on questions that are well-defined, unsolved, and whose answer changes what people do next, and we measure progress on external, uncontaminated benchmarks rather than our own tasks, including fresh competition mathematics (<a href="#ref-balunovic2025" class="cite">Balunović et al., 2025</a>) and frontier evaluations such as Humanity's Last Exam (<a href="#ref-phan2025" class="cite">Phan et al., 2025</a>). Machine-learning research itself is the natural first testbed: a minimal, fully open version of the whole loop already exists — an agent editing a training script against a fixed compute budget and a single validation metric (<a href="#ref-karpathy2026" class="cite">Karpathy, 2026</a>) — and every step of it is verifiable.

## What we look for

Bring us any hard problem, domain expertise, or a check — each feeds the AI Scientist we're building to solve your biggest problems, and society's.

- **A hard problem:** well-defined, unsolved, with data or a simulator to run against.
- **Domain expertise:** you know where your field is bottlenecked and can judge whether an answer is right.
- **A check:** compute, funding, or partnership to accelerate the work.

Get in touch.

## References

<ul class="references">
  <li id="ref-agrawal2025">Agrawal, L. A., et al. (2025). GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning. <a href="https://arxiv.org/abs/2507.19457">arXiv:2507.19457</a></li>
  <li id="ref-anthropic2024">Anthropic (2024). Model Context Protocol. <a href="https://modelcontextprotocol.io">modelcontextprotocol.io</a></li>
  <li id="ref-balunovic2025">Balunović, M., Dekoninck, J., Petrov, I., Jovanović, N., &amp; Vechev, M. (2025). MathArena: Evaluating LLMs on Uncontaminated Math Competitions. <a href="https://arxiv.org/abs/2505.23281">arXiv:2505.23281</a></li>
  <li id="ref-baur2026">Baur, R., Metz, Y., Gkoulta, M., El-Assady, M., Ramponi, G., &amp; Kleine Buening, T. (2026). MAVRL: Learning Reward Functions from Multiple Feedback Types with Amortized Variational Inference. <em>ICML</em>. <a href="https://arxiv.org/abs/2602.15206">arXiv:2602.15206</a></li>
  <li id="ref-deepseek2025">DeepSeek-AI (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. <a href="https://arxiv.org/abs/2501.12948">arXiv:2501.12948</a></li>
  <li id="ref-devos2019">Devos, A., Chatel, S., &amp; Grossglauser, M. (2019). [Re] Meta-learning with differentiable closed-form solvers. <em>ReScience C</em> / ICLR 2019 Reproducibility Challenge. <a href="https://rescience.github.io/bibliography/Devos_2019.html">rescience.github.io</a> · <a href="https://github.com/ArnoutDevos/r2d2">code</a></li>
  <li id="ref-devos2021">Devos, A., &amp; Dandi, Y. (2021). Model-Agnostic Learning to Meta-Learn. <em>Proceedings of the NeurIPS 2020 Workshop on Pre-registration in Machine Learning</em>, PMLR 148. <a href="https://proceedings.mlr.press/v148/devos21a.html">proceedings.mlr.press</a></li>
  <li id="ref-gottweis2026">Gottweis, J., Weng, W.-H., Daryin, A., et al. (2026). Accelerating scientific discovery with Co-Scientist. <em>Nature</em>. <a href="https://doi.org/10.1038/s41586-026-10644-y">doi:10.1038/s41586-026-10644-y</a> · <a href="https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/">blog post</a></li>
  <li id="ref-karpathy2026">Karpathy, A. (2026). autoresearch: AI agents running research on single-GPU nanochat training automatically. <a href="https://github.com/karpathy/autoresearch">GitHub</a></li>
  <li id="ref-lee2026">Lee, Y., Nair, R., Zhang, Q., Lee, K., Khattab, O., &amp; Finn, C. (2026). Meta-Harness: End-to-End Optimization of Model Harnesses. <a href="https://arxiv.org/abs/2603.28052">arXiv:2603.28052</a></li>
  <li id="ref-lu2026">Lu, C., Lu, C., Lange, R. T., Yamada, Y., Hu, S., Foerster, J., et al. (2026). Towards end-to-end automation of AI research. <em>Nature</em>. <a href="https://www.nature.com/articles/s41586-026-10265-5">doi:10.1038/s41586-026-10265-5</a></li>
  <li id="ref-miao2026">Miao, J., Davis, J. R., Zhang, Y., Pritchard, J. K., &amp; Zou, J. (2026). Reimagining research papers as interactive and reliable AI agents. <em>Nature</em>. <a href="https://www.nature.com/articles/s41586-026-11044-y">doi:10.1038/s41586-026-11044-y</a></li>
  <li id="ref-msr2022">Microsoft Research (2022). AI4Science to empower the fifth paradigm of scientific discovery. <a href="https://www.microsoft.com/en-us/research/blog/ai4science-to-empower-the-fifth-paradigm-of-scientific-discovery/">blog post</a></li>
  <li id="ref-vonneumann1945">von Neumann, J. (1945). First Draft of a Report on the EDVAC. <a href="https://doi.org/10.1109/85.238389">doi:10.1109/85.238389</a></li>
  <li id="ref-novikov2025">Novikov, A., Vũ, N., Eisenberger, M., et al. (2025). AlphaEvolve: A coding agent for scientific and algorithmic discovery. <a href="https://arxiv.org/abs/2506.13131">arXiv:2506.13131</a></li>
  <li id="ref-ouyang2022">Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training language models to follow instructions with human feedback. <em>NeurIPS</em>. <a href="https://arxiv.org/abs/2203.02155">arXiv:2203.02155</a></li>
  <li id="ref-phan2025">Phan, L., et al. (2025). Humanity's Last Exam. <a href="https://arxiv.org/abs/2501.14249">arXiv:2501.14249</a> · <a href="https://agi.safe.ai/">agi.safe.ai</a></li>
  <li id="ref-popper1972">Popper, K. R. (1972). <em>Objective Knowledge: An Evolutionary Approach</em>. Oxford: Clarendon Press.</li>
  <li id="ref-romera2024">Romera-Paredes, B., Barekatain, M., Novikov, A., et al. (2024). Mathematical discoveries from program search with large language models. <em>Nature</em>, 625, 468–475. <a href="https://doi.org/10.1038/s41586-023-06924-6">doi:10.1038/s41586-023-06924-6</a></li>
  <li id="ref-swissai2025">Swiss AI Initiative (2025). Apertus: Democratizing Open and Compliant LLMs for Global Language Environments. <a href="https://arxiv.org/abs/2509.14233">arXiv:2509.14233</a></li>
  <li id="ref-tao2026">Tao, T. (2026). A severe misalignment of AI in mathematics. <a href="https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/">blog post</a></li>
  <li id="ref-turing1936">Turing, A. M. (1936). On Computable Numbers, with an Application to the Entscheidungsproblem. <em>Proc. London Math. Soc.</em> <a href="https://doi.org/10.1112/plms/s2-42.1.230">doi:10.1112/plms/s2-42.1.230</a></li>
  <li id="ref-vaswani2017">Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. <em>NeurIPS</em>. <a href="https://arxiv.org/abs/1706.03762">arXiv:1706.03762</a></li>
  <li id="ref-yang2024">Yang, C., Wang, X., Lu, Y., et al. (2024). Large Language Models as Optimizers. <em>ICLR</em>. <a href="https://arxiv.org/abs/2309.03409">arXiv:2309.03409</a></li>
  <li id="ref-zheng2026">Zheng, T., Wu, X., Zhang, Z., et al. (2026). Dream-RSI: Recursive Self-Improvement through Evolving Worlds. <a href="https://arxiv.org/abs/2609.14858">arXiv:2609.14858</a></li>
</ul>
