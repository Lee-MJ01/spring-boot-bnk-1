// 🔹 탭 버튼 활성화 전환 + 콘텐츠 전환
const tabs = document.querySelectorAll('.view-tab');
const contents = document.querySelectorAll('.view-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // 모든 탭 / 콘텐츠 초기화
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // 클릭한 탭과 대응 콘텐츠 활성화
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});
