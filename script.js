const questions = [
  ['あなたが心惹かれる空間は？',['リボンや花柄に囲まれた、優雅なサロン','白熱灯と白熱灯が心地よい、南フランスのアトリエ','モノトーンで整えられた、洗練されたパリの部屋','花と植物に囲まれた、小さな庭のアトリエ']],
  ['好きな色の組み合わせは？',['ローズゴールド、ミント、淡いブルー','アイボリー、ラベンダー','黒、グレー、アイボリー','花のようなピンク、グリーン、パープル']],
  ['手元に置きたいものは？',['リボンやタッセルのついた小箱','白い布で作られた、ふっくらとした小物','自分のイニシャルが入った小物','花の刺繍が入ったポーチや布箱']],
  ['手仕事に何を求めますか？',['優雅な世界観と、特別感','静かに集中する、穏やかな時間','自分らしさを表現する、上質な小物','暮らしを明るくする、可憐な彩り']],
  ['贈り物を選ぶなら、どんなものにしますか？',['大切な人の部屋に飾りたくなる、華やかな小箱','長く使える、やさしい手触りの布小物','名前やイニシャルを入れた、特別な一品','花や季節を感じる、可愛らしい小物']],
  ['最初に作ってみたいものは？',['好きな布を使った、上品な布箱','立体感のある、白いブティの小物','イニシャルや文字を入れた刺繍作品','花をモチーフにした刺繍や小物']],
  ['週末の午後、理想の過ごし方は？',['アンティークを眺めながら、丁寧に飾りつける','窓辺で静かに針を進める','好きな紙や布を選び、デザインを考える','庭の花を摘み、小さなブーケをつくる']],
  ['あなたの暮らしにいちばん近い言葉は？',['物語のある、優雅な暮らし','やわらかな光と、穏やかな手仕事','凛とした、パリらしい洗練','季節の花が彩る、愛らしい毎日']]
];
const results = [
  {title:'王妃のサロン', theme:'ロマンティックな優雅さを愛するあなたへ', image:'assets/queen.jpg', alt:'リボンをあしらった布箱', recommend:'カルトナージュ、上品な布箱', copy:'優雅なサロン、リボン、繊細な花柄に心惹かれるあなた。\n暮らしの中に美しいものを置き、好きなものに囲まれる時間を大切にするタイプです。\nお気に入りの布で仕立てるカルトナージュは、その感性とよく似合います。'},
  {title:'南フランスのひだまり', theme:'やわらかな光と、白い手仕事', image:'assets/south-france.jpg', alt:'白糸の立体的なブティ作品', recommend:'ブティ', copy:'白い布の中に浮かび上がる、繊細でふっくらとした模様に心惹かれるあなた。\n静かに針を進める時間や、手仕事のぬくもりを味わうことが好きなタイプです。\n南フランスに受け継がれるブティは、あなたの毎日にやさしい豊かさを添えてくれます。'},
  {title:'パリのモダンモノグラム', theme:'洗練された小物を、自分らしく', image:'assets/monogram.jpg', alt:'白いモノグラム刺繍のナプキン', recommend:'フランス刺繍、モノグラム刺繍', copy:'シンプルな中にある美しさや、自分だけの印に惹かれるあなた。\n暮らしのものも、自分らしく上品に選びたいタイプです。\nイニシャルやモノグラムを刺繍した作品は、毎日を少しだけ特別な気持ちにしてくれます。'},
  {title:'花園のアトリエ', theme:'花と色彩で、暮らしを可憐に', image:'assets/flower-atelier.jpg', alt:'花の刺繍とレースをあしらったかご', recommend:'花のフランス刺繍、カルトナージュ', copy:'花を日常に、可憐な色合いに心惹かれるあなた。\n暮らしの中に、小さなときめきや季節の彩りを取り入れたいタイプです。\n花を刺繍した小物や、好きな布で仕立てる箱づくりが、手仕事を楽しくしてくれます。'}
];
let current = 0; const answers = [];
const quiz = document.querySelector('#quiz'), result = document.querySelector('#result');
function showQuiz(){ document.querySelector('#intro').hidden=true; quiz.hidden=false; result.hidden=true; result.style.display='none'; current=0; answers.length=0; renderQuestion(); quiz.scrollIntoView({behavior:'smooth'}); }
function renderQuestion(){ const [title, options] = questions[current]; document.querySelector('#progressText').textContent=`${current + 1} / ${questions.length}`; document.querySelector('#progressBar').style.width=`${(current + 1)/questions.length*100}%`; document.querySelector('#backButton').hidden=current===0; document.querySelector('#questionCard').innerHTML=`<p class="question-number">QUESTION ${String(current+1).padStart(2,'0')}</p><h2>${title}</h2><div class="choices">${options.map((option,i)=>`<button class="choice" type="button" data-choice="${i}"><b>${'ABCD'[i]}.</b><span>${option}</span></button>`).join('')}</div>`; document.querySelectorAll('.choice').forEach(button=>button.addEventListener('click',()=>choose(+button.dataset.choice))); }
function choose(choice){ answers[current]=choice; if(current<questions.length-1){current++;renderQuestion();window.scrollTo({top:quiz.offsetTop-20,behavior:'smooth'});} else showResult(); }
function showResult(){ const score=[0,0,0,0]; answers.forEach(answer=>score[answer]++); const high=Math.max(...score); let type=score.indexOf(high); if(score.filter(v=>v===high).length>1) type=answers[0]; const item=results[type]; document.querySelector('#resultImage').src=item.image; document.querySelector('#resultImage').alt=item.alt; document.querySelector('#resultTitle').textContent=item.title; document.querySelector('#resultTheme').textContent=item.theme; document.querySelector('#resultCopy').textContent=item.copy; document.querySelector('#resultRecommend').textContent=item.recommend; quiz.hidden=true; result.hidden=false; result.style.display='grid'; result.scrollIntoView({behavior:'smooth'}); }
document.querySelector('#beginButton').addEventListener('click',()=>document.querySelector('#intro').scrollIntoView({behavior:'smooth'}));
document.querySelector('#introButton').addEventListener('click',showQuiz); document.querySelector('#backButton').addEventListener('click',()=>{if(current){current--;renderQuestion();}}); document.querySelector('#restartButton').addEventListener('click',()=>{result.hidden=true; result.style.display='none'; document.querySelector('#intro').hidden=false; document.querySelector('#intro').scrollIntoView({behavior:'smooth'});});
