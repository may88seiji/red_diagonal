#ウインドウに赤い対角線を描く

##与件
・黒背景のウインドウの上下中央に白いテキストボックスを配置する  
・ボックス内のテキストは、選択可能であること  
・ウインドウの左上から右下にかけて赤い線を描画する  
・赤い線はウインドウサイズを変更しても常に左上から右下に向けて表示されるようにする  
・確認環境はWindowsの最新Chromeとする  

##実装内容
1 flexboxを使用して黒い背景のウインドウの上下中央に白いテキストボックス(クラス名"text_box")を配置する  
2 赤い線を描画するためのdiv要素(クラス名"diagonal")をテキストボックスの下に記述する  
3 div要素(クラス名"diagonal")のcssに"border-top: solid #FF0000 1px;"を設定して赤い線を描画する  
4 JavaScriptにてウインドウの高さと幅を動的に取得し、対角線の長さと角度を計算する  
5 取得した対角線の長さをdiv.diagonalのwidthに設定し、transform:rotateを使って取得した角度だけborder-topを傾ける  

##実装のポイント
"テキスト選択可能"の条件はbackground-imageなどcssだけで処理をさせないためだと解釈しました。  
そのため、ウインドウの高さと幅をJavaScriptで取得し、その数値をもとに対角線の長さと角度を求めました。  
対角線の角度をもとめるにあたって、はじめにウインドウの高さと幅をもとに"Math.atan()"でラジアン単位を計算しました。次にラジアン単位を"Math.PI"を使って度数法に変換して角度を求めました。取得した値は"div.diagonal"のcss、transform:rotateに設定しています。  
対角線の長さは√(高さ×高さ+幅×幅)で求めることができます。√は"Math.sqrt()"を使用して計算しました。  
JavaScriptは画面読み込み時とウインドウサイズ変更時に高さと幅を計算するように記述して、常に赤い対角線が描画されるようにしています。  

確認環境がWindowsなのは、,Mac Osとは異なる仕様への対応を見ているのだと解釈しました。  
実際にWindows環境下ではスクロールバーが表示されると赤い線がずれてしまう現象がでたので、スクロールバーが出ないようにcss対応しました。
