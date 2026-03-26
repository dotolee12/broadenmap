I built a location-based exploration system where real-world movement reveals a darkened map, fades over time, and highlights meaningful places based on dwell time.

3/25
메모를 별 마커로 지도에 저장할 수 있음
별 마커는 어둠 레이어 위에 항상 보임
별을 누르면 기록한 날짜와 시간이 표시됨
메모는 사이드바와 팝업에서 삭제 가능
어둠 레이어를 버튼으로 켜고 끌 수 있음
오래 머문 자리는 시간에 따라 색이 바뀌고 반경이 최대 1.5배까지 커짐
GPS 오차를 고려해 체류 판정이 더 안정적으로 동작함
경로 데이터는 자동 압축되어 장시간 사용 시에도 부담을 줄임
메모, 경로, 어둠 ON/OFF 상태가 브라우저에 저장되어 새로고침 후에도 유지됨
한 줄로 줄이면:

WAYOU는 이동한 길을 밝히고, 머문 자리를 색으로 남기며, 메모와 기록을 저장하는 탐험형 기억 지도 웹앱이다.
