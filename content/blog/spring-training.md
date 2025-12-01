---
title: "MPI入門"
summary: "研究室のSpring TrainingでMPIについて発表しました．"
date: "2025-11/12"
tags: ["研究", "MPI"]
thumbnail: "/blog/spring-training/thumbnail.png"
---

7月9日に発表したスライドを今更ながら共有します．

# Spring Trainingとは
- 僕が所属する研究室では，毎年『Spring Training』が行われています．
- 入ってきた学生に対して，1つテーマを与え，そのテーマについて調べて研究室のメンバーに発表する勉強会(?)です．
- 弊研究室はHPC（高性能計算）がテーマの研究室なので，発表内容も低レイヤー寄りの内容（OpenMP, MPI, CUDA, etc.）が多いです．一方，近年はAIの研究テーマも増えており，AI学習の内容（PyTorch, Transformer, etc.）もあります．
- 僕はこの中で「MPI（Message Passing Interface）」（並列計算を行うためのAPI）を担当することになりました．

# 発表内容
- 発表から４ヶ月ほど経過してしまいましたが，発表内容を共有します．
- 発表スライド： [MPI Tutorial](https://drive.google.com/file/d/16Eh6QuIbPx3n028feh-8aI-gPdT6BZB_/view?usp=sharing)
- Code: [Github - mpi-tutorial](https://github.com/Omusubi0123/mpi-tutorial)

# 終わりに
- 発表を行うまではMPIとは何なのか全く分からない状態だったので，発表に向けて調べる中で大変勉強になりました
- 東大で保有しているスパコンを『スパコンっぽく』使う場合にはMPIの知識は必須なので，学部入学直後の時期にMPIを学ぶことができたのは良かったです
- 今の研究分野とは直接関係ない内容でしたが，低レイヤーの知識が必要な場面も多いので，学んだことを活かせる場面も多いと思っています
- 気が向いたらMPIについてもう少し詳しく書きたいと思います
