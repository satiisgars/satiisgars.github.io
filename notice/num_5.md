---
layout: default
title: "제3회 위성지능정보학회 워크샵 개최 안내"
date: 2026-09-21
categories: [학회소식, 워크샵]
---

<style>

/* =========================================
   공통
========================================= */

.workshop-wrap {
  font-family: 'Noto Sans KR', 'Noto Sans',
               '맑은 고딕', 'Malgun Gothic',
               Arial, Helvetica, sans-serif;
  color: #252525;
  line-height: 1.7;
}

.workshop-wrap strong {
  font-weight: 700;
}

.workshop-wrap hr {
  border: 0;
  border-top: 1px solid #e2e6ea;
  margin: 34px 0;
}


/* =========================================
   섹션 제목
========================================= */

.section-title {
  display: flex;
  align-items: center;
  gap: 9px;

  margin: 34px 0 16px 0;
  padding-bottom: 10px;

  border-bottom: 3px solid #17365d;

  font-size: 1.15em;
  font-weight: 700;
  color: #17365d;
}

.section-title .icon {
  font-size: 1.05em;
}


/* =========================================
   워크샵 개요
========================================= */

.info-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  border: 1px solid #d5dde5;
  border-radius: 8px;

  font-size: 0.94em;
  margin-bottom: 20px;
}

.info-table th,
.info-table td {
  padding: 13px 16px;
  border-bottom: 1px solid #dfe5eb;
}

.info-table tr:last-child th,
.info-table tr:last-child td {
  border-bottom: 0;
}

.info-table th {
  width: 20%;
  min-width: 105px;

  background: #17365d;
  color: #ffffff;

  text-align: center;
  font-weight: 700;
}

.info-table td {
  background: #ffffff;
}


/* =========================================
   프로그램 - Day title
========================================= */

.day-title {
  display: flex;
  align-items: center;

  margin: 25px 0 10px 0;
  padding: 11px 16px;

  background: #17365d;
  border-radius: 7px 7px 0 0;

  color: #ffffff;
  font-size: 1em;
  font-weight: 700;
}

.day-title span {
  margin-left: 7px;
  font-weight: 400;
  color: #dce8f5;
}


/* =========================================
   프로그램 표
========================================= */

.program-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;

  border: 1px solid #cdd7e1;
  border-radius: 0 0 8px 8px;
  overflow: hidden;

  margin-bottom: 25px;
  font-size: 0.9em;
}

.program-table th {
  padding: 12px 10px;

  background: #2f75b5;
  color: #ffffff;

  border-right: 1px solid rgba(255,255,255,0.25);
  text-align: center;
  font-weight: 700;
}

.program-table th:last-child {
  border-right: none;
}

.program-table td {
  padding: 12px 12px;

  border-right: 1px solid #dce3e9;
  border-bottom: 1px solid #dce3e9;

  vertical-align: middle;
  background: #ffffff;
}

.program-table td:last-child {
  border-right: none;
}

.program-table tr:last-child td {
  border-bottom: none;
}

.program-table tbody tr:nth-child(even) td {
  background: #f8fafc;
}


/* 시간 */

.time-cell {
  width: 17%;
  text-align: center;
  white-space: nowrap;

  color: #17365d;
  font-weight: 700;

  background: #f1f6fb !important;
}

.time-cell .duration {
  display: block;
  margin-top: 3px;

  font-size: 0.86em;
  color: #718096;
  font-weight: 400;
}


/* 발표 내용 */

.content-cell {
  width: 58%;
  text-align: center;
}


/* 발표자 */

.presenter-cell {
  width: 25%;
  text-align: center;
}


/* =========================================
   중요 세션 강조
========================================= */

.tutorial-row td {
  background: #eef5fc !important;
}

.tutorial-title {
  color: #17365d;
  font-size: 1.08em;
  font-weight: 700;
}

.tutorial-subtitle {
  margin-top: 5px;
  color: #4a5a6a;
  font-size: 0.94em;
}


/* 개회사 */

.opening-row td {
  background: #f8fbfd !important;
}


/* 식사 */

.meal-row td {
  background: #fffaf1 !important;
}


/* 휴식 */

.break-row td {
  background: #f5f5f5 !important;
  color: #666666;
}


/* 현장탐방 */

.field-row td {
  background: #edf7f3 !important;
}


/* =========================================
   특별세션
========================================= */

.special-row td {
  background: #ffffff !important;
}

.special-session-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  text-align: left;
}

.special-card {
  border: 1px solid #cad8e6;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
}

.special-card-title {
  padding: 9px 13px;

  background: #e7f0f8;
  border-bottom: 1px solid #cad8e6;

  color: #17365d;
  font-weight: 700;
  text-align: center;
}

.special-card-body {
  padding: 14px 15px;
  min-height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.special-topic {
  font-weight: 600;
  line-height: 1.55;
  margin-bottom: 13px;
}

.special-chair {
  padding-top: 10px;
  border-top: 1px dashed #cdd7e1;

  font-size: 0.92em;
  color: #4d5965;
}

.special-chair strong {
  color: #17365d;
}


/* =========================================
   등록비
========================================= */

.registration-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  border: 1px solid #ccd6df;
  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 18px;

  text-align: center;
  font-size: 0.94em;
}

.registration-table th {
  padding: 12px 10px;

  background: #17365d;
  color: #ffffff;

  border-right: 1px solid rgba(255,255,255,0.2);
}

.registration-table th:last-child {
  border-right: 0;
}

.registration-table td {
  padding: 14px 10px;

  border-right: 1px solid #dbe2e8;
  border-bottom: 1px solid #dbe2e8;
}

.registration-table td:last-child {
  border-right: 0;
}

.registration-table tr:last-child td {
  border-bottom: 0;
}


/* 사전등록 강조 */

.registration-table .early td {
  background: #edf5fc;
}

.registration-table .early-label {
  color: #17365d;
  font-weight: 700;
}

.registration-table .price {
  font-size: 1.05em;
  font-weight: 700;
  color: #17365d;
}


/* 현장등록 */

.registration-table .onsite td {
  background: #ffffff;
}


/* =========================================
   안내 박스
========================================= */

.notice-box {
  padding: 17px 20px;
  margin: 15px 0;

  background: #f5f8fb;
  border-left: 4px solid #2f75b5;
  border-radius: 4px;

  font-size: 0.93em;
  line-height: 1.8;
}

.notice-box ul {
  margin: 0;
  padding-left: 20px;
}

.notice-box li {
  margin: 4px 0;
}


/* =========================================
   버튼
========================================= */

.button {
  display: block;

  max-width: 520px;
  margin: 15px auto;

  padding: 14px 20px;

  background: #17365d;
  border: 1px solid #17365d;
  border-radius: 6px;

  color: #ffffff !important;
  text-align: center;

  font-size: 17px;
  font-weight: 700;
  text-decoration: none !important;

  transition: all 0.2s ease;
}

.button:hover {
  background: #2f75b5;
  border-color: #2f75b5;
}

.button.secondary {
  background: #ffffff;
  color: #17365d !important;
  border: 2px solid #17365d;
}

.button.secondary:hover {
  background: #eef5fb;
}


/* =========================================
   모바일
========================================= */

@media (max-width: 700px) {

  .info-table th {
    width: 27%;
    padding: 10px 8px;
  }

  .info-table td {
    padding: 10px;
  }

  .program-table {
    font-size: 0.78em;
  }

  .program-table th,
  .program-table td {
    padding: 8px 5px;
  }

  .time-cell {
    width: 20%;
    white-space: normal;
  }

  .content-cell {
    width: 55%;
  }

  .presenter-cell {
    width: 25%;
  }

  .special-session-wrap {
    grid-template-columns: 1fr;
  }

}

</style>


<div class="workshop-wrap">

<br><br>

<div class="gayheader">
  <span>제3회 위성지능정보학회 워크샵 개최 안내</span>
  <div></div>
</div>

<br>

<p style="
  text-align:right;
  font-size:0.88em;
  color:#7a7a7a;
  margin-bottom:28px;
">
  등록일자: 2026년 9월 21일
</p>


<p style="
  font-size:0.95em;
  line-height:1.85em;
">
  회원 여러분, 안녕하세요:)<br>
  위성지능정보학회입니다.<br><br>

  제3회 위성지능정보학회 워크샵을 다음과 같이 개최하고자 하오니
  회원 여러분들의 많은 관심과 참여를 부탁드리겠습니다.
</p>



<!-- ======================================
     워크샵 개요
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  워크샵 개요
</div>

<table class="info-table">

  <tr>
    <th>일시</th>
    <td>
      2026.10.07.(수) - 10.08.(목)
    </td>
  </tr>

  <tr>
    <th>장소</th>
    <td>
      코트야드 메리어트 평택 스튜디오 룸
    </td>
  </tr>

  <tr>
    <th>주제</th>
    <td>
      <strong>
        Overcoming the Limitations of Satellite Intelligence
        Using Large Language Models (LLM)
      </strong>
    </td>
  </tr>

</table>



<!-- ======================================
     프로그램
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  프로그램 세부일정
</div>


<!-- DAY 1 -->

<div class="day-title">
  10.7.(수)
  <span>1일차</span>
</div>


<table class="program-table">

  <thead>
    <tr>
      <th style="width:17%;">시간</th>
      <th style="width:58%;">발표주제 및 내용</th>
      <th style="width:25%;">발표자</th>
    </tr>
  </thead>


  <tbody>

    <tr>
      <td class="time-cell">
        09:00–09:30
        <span class="duration">(30’)</span>
      </td>

      <td class="content-cell">
        <strong>등록</strong>
      </td>

      <td class="presenter-cell"></td>
    </tr>


    <tr class="opening-row">
      <td class="time-cell">
        09:30–09:40
        <span class="duration">(10’)</span>
      </td>

      <td class="content-cell">
        <strong>개회사</strong>
      </td>

      <td class="presenter-cell">
        위성지능정보학회장
      </td>
    </tr>


    <tr class="tutorial-row">
      <td class="time-cell">
        09:40–13:00
        <span class="duration">(200’)</span>
      </td>

      <td class="content-cell">

        <div class="tutorial-title">
          GeoAI with LLM
        </div>

        <div class="tutorial-subtitle">
          - 바이브 코딩 기반<br>
          데이터 전처리 및 딥러닝 모델 학습 -
        </div>

      </td>

      <td class="presenter-cell"></td>
    </tr>


    <tr class="meal-row">
      <td class="time-cell">
        13:00–14:00
        <span class="duration">(60’)</span>
      </td>

      <td class="content-cell">
        <strong>자유토론 및 오찬</strong>
      </td>

      <td class="presenter-cell"></td>
    </tr>


    <tr class="break-row">
      <td class="time-cell">
        14:00–14:30
        <span class="duration">(30’)</span>
      </td>

      <td class="content-cell">
        Coffe Break(휴식)
      </td>

      <td class="presenter-cell"></td>
    </tr>


    <!-- SPECIAL SESSION -->

    <tr class="special-row">

      <td class="time-cell">
        14:30–17:00
        <span class="duration">(150’)</span>
      </td>


      <td colspan="2">

        <div style="
          text-align:center;
          font-weight:700;
          color:#17365d;
          margin-bottom:12px;
          font-size:1.04em;
        ">
          특별세션
        </div>


        <div class="special-session-wrap">


          <!-- Studio 1 -->

          <div class="special-card">

            <div class="special-card-title">
              스튜디오 룸 Ⅰ
            </div>

            <div class="special-card-body">

              <div class="special-topic">
                EMSA INR 알고리즘 고도화 및
                위치정확도 개선 자문회의
              </div>

              <div class="special-chair">
                <strong>좌장:</strong> 이명진<br>
                한국환경연구원
              </div>

            </div>

          </div>


          <!-- Studio 2 -->

          <div class="special-card">

            <div class="special-card-title">
              스튜디오 룸 Ⅱ
            </div>

            <div class="special-card-body">

              <div class="special-topic">
                InSAR 정밀관측 및 AI 기반
                지반변위 모니터링 기술
              </div>

              <div class="special-chair">
                <strong>좌장:</strong> 정형섭<br>
                서울시립대학교
              </div>

            </div>

          </div>


        </div>

      </td>

    </tr>


    <tr class="break-row">
      <td class="time-cell">
        17:00–17:30
        <span class="duration">(30’)</span>
      </td>

      <td class="content-cell">
        Coffe Break(휴식)
      </td>

      <td class="presenter-cell"></td>
    </tr>


    <tr class="meal-row">
      <td class="time-cell">
        17:30–19:00
        <span class="duration">(90’)</span>
      </td>

      <td class="content-cell">
        <strong>자유토론 및 만찬</strong>
      </td>

      <td class="presenter-cell"></td>
    </tr>

  </tbody>

</table>



<!-- DAY 2 -->

<div class="day-title">
  10.8.(목)
  <span>2일차</span>
</div>


<table class="program-table">

  <thead>
    <tr>
      <th style="width:17%;">시간</th>
      <th style="width:58%;">발표주제 및 내용</th>
      <th style="width:25%;">발표자</th>
    </tr>
  </thead>


  <tbody>

    <tr>
      <td class="time-cell">
        09:00–09:30
        <span class="duration">(30’)</span>
      </td>

      <td class="content-cell">
        <strong>등록</strong>
      </td>

      <td class="presenter-cell"></td>
    </tr>


    <tr class="field-row">
      <td class="time-cell">
        09:30–12:00
        <span class="duration">(150’)</span>
      </td>

      <td class="content-cell">
        <strong>현장 탐방(국립생태원)</strong>
      </td>

      <td class="presenter-cell"></td>
    </tr>

  </tbody>

</table>



<!-- ======================================
     등록비
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  등록비 안내
</div>


<table class="registration-table">

  <thead>
    <tr>
      <th style="width:22%;">구분</th>
      <th style="width:26%;">정회원(일반)</th>
      <th style="width:26%;">학생회원</th>
      <th style="width:26%;">비고</th>
    </tr>
  </thead>


  <tbody>

    <tr class="early">

      <td class="early-label">
        사전등록
      </td>

      <td class="price">
        350,000원
      </td>

      <td class="price">
        200,000원
      </td>

      <td>
        ~ 2026.10.02.(금)
      </td>

    </tr>


    <tr class="onsite">

      <td>
        <strong>현장등록</strong>
      </td>

      <td>
        450,000원
      </td>

      <td>
        250,000원
      </td>

      <td></td>

    </tr>

  </tbody>

</table>



<div class="notice-box">

  <ul>

    <li>
      등록비는 <strong>튜토리얼 세션 포함</strong>입니다.
    </li>

    <li>
      <strong>사전등록마감:</strong>
      ~ 2026.10.02.(금)까지
    </li>

    <li>
      <strong>결제방법:</strong>
      신용카드 결제 및 계좌이체
    </li>

    <li>
      <strong>등록비 납부계좌:</strong>
      우리은행, 1005-304-831659
      [예금주: 위성지능정보학회]
    </li>

    <li>
      등록비 입금 시 등록자명으로 입금해주시기 바라며,
      등록자명과 송금인이 다를 경우 반드시
      학회 사무국
      (<a href="mailto:satiis.society@gmail.com">
        satiis.society@gmail.com
      </a>)으로 연락바랍니다.
    </li>

  </ul>

</div>



<!-- ======================================
     사전등록
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  사전등록하기
</div>


<p style="
  text-align:center;
  font-size:0.94em;
  color:#555;
">
  사전등록은 아래 링크를 통해 신청해주시기 바랍니다.
</p>


<a
  href="https://forms.gle/2MNFSmzR6v4BySMt9"
  target="_blank"
  class="button">
  사전등록 신청하기
</a>



<!-- ======================================
     특별세션
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  특별세션 신청 안내
</div>


<div class="notice-box">
  특별세션 신청방법 및 등록비는
  <strong>학회 사무국으로 별도 문의</strong>하여 주시기 바랍니다.
</div>



<!-- ======================================
     행사장
====================================== -->

<div class="section-title">
  <span class="icon">▣</span>
  행사장 안내
</div>


<table class="info-table">

  <tr>
    <th>행사장</th>
    <td>
      코트야드 메리어트 평택
    </td>
  </tr>

  <tr>
    <th>주소</th>
    <td>
      경기 평택시 고덕면 첨단대로 110
    </td>
  </tr>

</table>


<a
  href="https://naver.me/GV2UbYvK"
  target="_blank"
  class="button secondary">
  행사장 위치 확인
</a>


<br>


<p style="
  margin-top:35px;
  padding-top:22px;
  border-top:1px solid #e1e5e9;

  text-align:center;
  font-size:0.94em;
  line-height:1.8em;
  color:#555;
">

  회원 여러분들의 많은 관심과 참여를 부탁드립니다.
  <br><br>

  <strong style="color:#17365d;">
    위성지능정보학회 드림
  </strong>

</p>


</div>