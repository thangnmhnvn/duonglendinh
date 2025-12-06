let questionPool = [...allQuestions];

// Hàm xáo trộn mảng
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Lấy ngẫu nhiên câu hỏi và trộn opts
function getRandomQuestions(count) {
  if (questionPool.length < count) {
    questionPool = [...allQuestions];
  }

  // Xáo trộn pool
  shuffleArray(questionPool);

  const selected = questionPool.slice(0, count);
  questionPool.splice(0, count); // loại bỏ câu đã lấy

  // Trộn opts và cập nhật answer cho từng câu
  selected.forEach(q => {
    const correctAnswer = q.opts[q.answer]; // lưu đáp án đúng
    shuffleArray(q.opts);                   // trộn các lựa chọn
    q.answer = q.opts.indexOf(correctAnswer); // cập nhật vị trí đáp án đúng
  });

  return selected;
}


