---
layout: page
title: Few-shot Learning for ML Adaptation
description: My PhD thesis on few-shot learning for more effective and efficient adaptation of machine learning models.
img: assets/img/EPFL_TH9878.pdf.jpg
importance: 2
date: 2024-06-01 # most recent edition/activity, used for ordering
category: [research]
selected: false
---

Machine learning (ML) enables artificial intelligent (AI) agents to learn autonomously from data obtained from their environment to perform tasks. Modern ML systems have proven to be extremely effective, reaching or even exceeding human intelligence.
Although these systems are highly effective at solving their specific tasks, they are not very efficient, requiring massive and costly amounts of task-specific high-quality data to reach that performance. In contrast, human intelligence can transfer knowledge from previous experiences to learn new related concepts effectively and very efficiently, i.e., from mostly one or only a few examples of a new concept. Few-shot learning is the ML area that deals with this. The research in this thesis focuses on investigating and developing few-shot learning solutions for more effective and more efficient machine learning model adaptation.

First, we investigate the existing linear regression meta-learning method R2D2 its reproducibility. We find that the findings are mostly reproducible, but different backbone models should be taken into consideration when comparing results of different methods.

Continuing with the methodology of linear regression, we introduce Regression Networks, a metric-learning few-shot classification approach. The metric is the embedded regression error of a point to a subspace of shots. Regression Networks achieve excellent results, especially when subspaces can be formed with multiple shots per class.

Subsequently, we address the inefficiency of needing many labeled training tasks by leveraging advances in self-supervised learning. Our approach ProtoTransfer has matching contrastive pre-training with prototypical task adaptation. We show that ProtoTransfer outperforms state-of-the-art unsupervised methods and even matches performance of supervised methods under domain-shift, at a fraction of the labeling cost.

Additionally, we design a meta-learning approach for survival analysis of rare diseases based on high-dimensional RNA sequencing data. Addressing parameter count, a first-order meta-learning algorithm is adopted together with a Cox survival loss. We show that meta-learning is significantly more effective in this setting than regular fine-tuning.

Lastly, we go beyond single task adaptation with a model-agnostic learning to meta-learn (MALTML) approach. Our algorithm enables a model to quickly exploit commonalities among related tasks from an unseen task distribution, before quickly adapting to a specific task. Our experiments show that MALTML generally improves adaptation.

Learn more: [https://infoscience.epfl.ch/entities/publication/d249cfb0-a01f-40db-9478-69dbc22f369e](https://infoscience.epfl.ch/entities/publication/d249cfb0-a01f-40db-9478-69dbc22f369e)
