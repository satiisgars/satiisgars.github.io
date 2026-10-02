---
title: "제3회 위성지능정보학회 워크샵 개최 안내"
date: 2026-09-21
category: 워크샵
summary: "2026.10.07.(수)–10.08.(목) · 코트야드 메리어트 평택 · Overcoming the Limitations of Satellite Intelligence Using LLM"
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
  line-height: 1.8;
  font-size: 17px;
}

.workshop-wrap strong {
  font-weight: 700;
}

/* =========================================
   섹션 제목
========================================= */

.section-title {
  display: flex;
  align-items: center;
  gap: 9px;

  margin: 38px 0 18px 0;
  padding-bottom: 11px;

  border-bottom: 3px solid #17365d;

  font-size: 22px;
  font-weight: 700;
  color: #17365d;
}

.section-title .icon {
  font-size: 20px;
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

  margin-bottom: 22px;
  font-size: 17px;
}

.info-table th,
.info-table td {
  padding: 16px 18px;
  border-bottom: 1px solid #dfe5eb;

  font-size: 17px;
  line-height: 1.65;
}

.info-table tr:last-child th,
.info-table tr:last-child td {
  border-bottom: 0;
}

.info-table th {
  width: 20%;
  min-width: 110px;

  background: #17365d;
  color: #ffffff;

  text-align: center;
  font-weight: 700;
}

.info-table td {
  background: #ffffff;
}

/* =========================================
   날짜 제목
========================================= */

.day-title {
  display: flex;
  align-items: center;

  margin: 28px 0 10px 0;
  padding: 14px 18px;

  background: #17365d;
  border-radius: 8px 8px 0 0;

  color: #ffffff;

  font-size: 19px;
  font-weight: 700;
}

.day-title span {
  margin-left: 9px;

  color: #dce8f5;

  font-size: 17px;
  font-weight: 400;
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

  margin-bottom: 28px;

  font-size: 17px;
}

.program-table th {
  padding: 15px 10px;

  background: #2f75b5;
  color: #ffffff;

  border-right: 1px solid rgba(255,255,255,0.30);

  text-align: center;

  font-size: 17px;
  font-weight: 700;

  line-height: 1.5;
}

.program-table th:last-child {
  border-right: 0;
}

.program-table td {
  padding: 16px 14px;

  border-right: 1px solid #dce3e9;
  border-bottom: 1px solid #dce3e9;

  vertical-align: middle;

  background: #ffffff;

  font-size: 17px;
  line-height: 1.65;
}

.program-table td:last-child {
  border-right: 0;
}

.program-table tr:last-child td {
  border-bottom: 0;
}

/* =========================================
   시간
========================================= */

.time-cell {
  width: 18%;

  text-align: center;
  white-space: nowrap;

  color: #17365d;

  font-size: 17px;
  font-weight: 700;

  background: #f1f6fb !important;
}

.time-cell .duration {
  display: block;

  margin-top: 4px;

  color: #718096;

  font-size: 15px;
  font-weight: 400;
}

/* =========================================
   발표내용
========================================= */

.content-cell {
  width: 57%;

  text-align: center;

  font-size: 17px;
}

/* =========================================
   발표자
========================================= */

.presenter-cell {
  width: 25%;

  text-align: center;

  font-size: 17px;
}

/* =========================================
   개회사
========================================= */

.opening-row td {
  background: #f8fbfd !important;
}

/* =========================================
   튜토리얼
========================================= */

.tutorial-row td {
  background: #eef5fc !important;
}

.tutorial-title {
  color: #17365d;

  font-size: 19px;
  font-weight: 700;

  line-height: 1.5;
}

.tutorial-subtitle {
  margin-top: 7px;

  color: #4a5a6a;

  font-size: 17px;
  line-height: 1.7;
}

/* =========================================
   Coffee Break
========================================= */

.break-row td {
  background: #f4f5f6 !important;
  color: #5f6870;
}

/* =========================================
   식사
========================================= */

.meal-row td {
  background: #fff9ed !important;
}

/* =========================================
   특별세션 제목행
========================================= */

.special-session-header td {
  background: #dce9f5 !important;
}

.special-session-title {
  color: #17365d;

  font-size: 18px;
  font-weight: 700;

  line-height: 1.65;
}

.special-session-chair {
  margin-top: 5px;

  color: #526273;

  font-size: 16px;
  font-weight: 500;
}

/* =========================================
   특별세션 발표행
========================================= */

.special-detail-row td {
  background: #f7fafd !important;
}

.special-detail-row .content-cell {
  color: #26394e;

  font-size: 17px;
  font-weight: 600;
}

.special-detail-row .presenter-cell {
  color: #333333;

  font-size: 17px;
  line-height: 1.6;
}

.affiliation {
  display: block;

  margin-top: 3px;

  color: #6a7682;

  font-size: 15px;
  font-weight: 400;
}

/* =========================================
   현장 탐방
========================================= */

.field-row td {
  background: #edf7f3 !important;
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

  margin-bottom: 20px;

  text-align: center;

  font-size: 17px;
}

.registration-table th {
  padding: 15px 11px;

  background: #17365d;
  color: #ffffff;

  border-right: 1px solid rgba(255,255,255,0.25);

  font-size: 17px;
  font-weight: 700;

  line-height: 1.5;
}

.registration-table th:last-child {
  border-right: 0;
}

.registration-table td {
  padding: 17px 11px;

  border-right: 1px solid #dbe2e8;
  border-bottom: 1px solid #dbe2e8;

  font-size: 17px;
  font-weight: 600;

  text-align: center;
  vertical-align: middle;

  line-height: 1.6;
}

.registration-table td:last-child {
  border-right: 0;
}

.registration-table tr:last-child td {
  border-bottom: 0;
}

.registration-table .early td {
  background: #edf5fc;
  color: #17365d;
}

.registration-table .onsite td {
  background: #ffffff;
  color: #333333;
}

/* =========================================
   안내 박스
========================================= */

.notice-box {
  padding: 20px 22px;

  margin: 17px 0;

  background: #f5f8fb;

  border-left: 4px solid #2f75b5;
  border-radius: 5px;

  font-size: 17px;
  line-height: 1.85;
}

.notice-box ul {
  margin: 0;
  padding-left: 22px;
}

.notice-box li {
  margin: 6px 0;
}

/* =========================================
   후원
========================================= */

.sponsor-box {
  width: 100%;
  box-sizing: border-box;

  padding: 20px 24px;

  background: #f5f8fb;

  border: 1px solid #d5dde5;
  border-radius: 8px;

  color: #17365d;

  text-align: center;

  font-size: 19px;
  font-weight: 700;

  line-height: 1.7;
}

/* =========================================
   버튼
========================================= */

.button {
  display: block;

  max-width: 520px;

  margin: 18px auto;

  padding: 16px 22px;

  background: #17365d;

  border: 1px solid #17365d;
  border-radius: 7px;

  color: #ffffff !important;

  text-align: center;

  font-size: 19px;
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

  .workshop-wrap {
    font-size: 16px;
  }

  .section-title {
    font-size: 20px;
  }

  .info-table {
    font-size: 16px;
  }

  .info-table th,
  .info-table td {
    font-size: 16px;
    padding: 12px 9px;
  }

  .info-table th {
    width: 27%;
  }

  .program-table {
    font-size: 15px;
  }

  .program-table th {
    font-size: 15px;
    padding: 11px 5px;
  }

  .program-table td {
    font-size: 15px;
    padding: 11px 6px;
  }

  .time-cell {
    width: 22%;

    font-size: 15px;
    white-space: normal;
  }

  .time-cell .duration {
    font-size: 14px;
  }

  .content-cell {
    width: 53%;
    font-size: 15px;
  }

  .presenter-cell {
    width: 25%;
    font-size: 15px;
  }

  .tutorial-title {
    font-size: 17px;
  }

  .tutorial-subtitle {
    font-size: 15px;
  }

  .special-session-title {
    font-size: 16px;
  }

  .special-session-chair {
    font-size: 14px;
  }

  .special-detail-row .content-cell,
  .special-detail-row .presenter-cell {
    font-size: 15px;
  }

  .affiliation {
    font-size: 13px;
  }

  .registration-table {
    font-size: 15px;
  }

  .registration-table th,
  .registration-table td {
    font-size: 15px;
    padding: 12px 5px;
  }

  .notice-box {
    font-size: 16px;
  }

  .sponsor-box {
    font-size: 17px;
    padding: 17px 15px;
  }

  .button {
    font-size: 17px;
  }

}

</style>

<div class="workshop-wrap">

<!-- ======================================
     제목
====================================== -->

<p style="
  font-size:17px;
  line-height:1.9;
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
    <td>2026.10.07.(수) - 10.08.(목)</td>
  </tr>

  <tr>
    <th>장소</th>
    <td>코트야드 메리어트 평택 스튜디오 룸</td>
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

  <tr>
    <th>참석대상</th>
    <td>
      위성지능정보학회 임원 및 회원, 비회원
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

<!-- ======================================
     DAY 1
====================================== -->

<div class="day-title">
  10.7.(수)
  <span>1일차</span>
</div>

<table class="program-table">

  <thead>

    <tr>
      <th style="width:18%;">시간</th>
      <th style="width:57%;">발표주제 및 내용</th>
      <th style="width:25%;">발표자</th>
    </tr>

  </thead>

  <tbody>

    <!-- 등록 -->

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

    <!-- Tutorial I -->

    <tr class="tutorial-row">

      <td class="time-cell">
        09:30–11:10
        <span class="duration">(100’)</span>
      </td>

      <td class="content-cell">

        <div class="tutorial-title">
          GeoAI with LLM (Ⅰ)
        </div>

        <div class="tutorial-subtitle">
          - 바이브 코딩 기반<br>
          데이터 전처리 및 딥러닝 모델 학습 (Ⅰ) -
        </div>

      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- Coffee Break -->

    <tr class="break-row">

      <td class="time-cell">
        11:10–11:30
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        Coffee Break (휴식)
      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- Tutorial II -->

    <tr class="tutorial-row">

      <td class="time-cell">
        11:30–13:00
        <span class="duration">(90’)</span>
      </td>

      <td class="content-cell">

        <div class="tutorial-title">
          GeoAI with LLM (Ⅱ)
        </div>

        <div class="tutorial-subtitle">
          - 바이브 코딩 기반<br>
          데이터 전처리 및 딥러닝 모델 학습 (Ⅱ) -
        </div>

      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- 오찬 -->

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

    <!-- Coffee Break -->

    <tr class="break-row">

      <td class="time-cell">
        14:00–14:20
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        Coffee Break (휴식)
      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- 개회사 -->

    <tr class="opening-row">

      <td class="time-cell">
        14:20–14:30
        <span class="duration">(10’)</span>
      </td>

      <td class="content-cell">
        <strong>개회사</strong>
      </td>

      <td class="presenter-cell">
        위성지능정보학회장
      </td>

    </tr>

    <!-- ======================================
         특별세션 I 제목
    ====================================== -->

    <tr class="special-session-header">

      <td class="time-cell">
        14:30–15:50
        <span class="duration">(80’)</span>
      </td>

      <td colspan="2" class="content-cell">

        <div class="special-session-title">
          특별세션Ⅰ: EMSA INR 기술 개발 및 검증
        </div>

        <div class="special-session-chair">
          좌장: 정형섭 (서울시립대학교)
        </div>

      </td>

    </tr>

    <!-- 특별세션 I 발표 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        14:30–15:10
        <span class="duration">(40’)</span>
      </td>

      <td class="content-cell">
        EMSA 항공환경센서의 INR 기술 개발 및 정확도 검증
      </td>

      <td class="presenter-cell">
        <strong>정형섭</strong>
        <span class="affiliation">
          서울시립대학교
        </span>
      </td>

    </tr>

    <!-- 특별세션 I 자문 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        15:10–15:50
        <span class="duration">(40’)</span>
      </td>

      <td class="content-cell">
        기술 자문 및 토론
      </td>

      <td class="presenter-cell">
        <strong>전문 자문위원단</strong>
      </td>

    </tr>

    <!-- Coffee Break -->

    <tr class="break-row">

      <td class="time-cell">
        15:50–16:10
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        Coffee Break (휴식)
      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- ======================================
         특별세션 II 제목
    ====================================== -->

    <tr class="special-session-header">

      <td class="time-cell">
        16:10–17:30
        <span class="duration">(80’)</span>
      </td>

      <td colspan="2" class="content-cell">

        <div class="special-session-title">
          특별세션Ⅱ: 지질·해양·환경 분야 GeoAI 활용기술 개발
        </div>

        <div class="special-session-chair">
          좌장: 정형섭 (서울시립대학교)
        </div>

      </td>

    </tr>

    <!-- 발표 1 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        16:10–16:30
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        최신 기계학습 및 검증 기법을 적용한 지하수 산출 가능성도 작성
      </td>

      <td class="presenter-cell">
        <strong>이사로</strong>
        <span class="affiliation">
          한국지질자원연구원
        </span>
      </td>

    </tr>

    <!-- 발표 2 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        16:30–16:50
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        해양위성 및 인공지능 융합 활용 연구
      </td>

      <td class="presenter-cell">
        <strong>최종국</strong>
        <span class="affiliation">
          한국해양과학기술원
        </span>
      </td>

    </tr>

    <!-- 발표 3 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        16:50–17:10
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        자연재해(산사태 등) AI 파운데이션 모델 기초 정립 연구
      </td>

      <td class="presenter-cell">
        <strong>이명진</strong>
        <span class="affiliation">
          한국환경연구원
        </span>
      </td>

    </tr>

    <!-- 종합 토론 -->

    <tr class="special-detail-row">

      <td class="time-cell">
        17:10–17:30
        <span class="duration">(20’)</span>
      </td>

      <td class="content-cell">
        종합 질의응답 및 토론
      </td>

      <td class="presenter-cell"></td>

    </tr>

    <!-- 만찬 -->

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

<!-- ======================================
     DAY 2
====================================== -->

<div class="day-title">

  10.8.(목)

  <span>
    2일차
  </span>

</div>

<table class="program-table">

  <thead>

    <tr>
      <th style="width:18%;">시간</th>
      <th style="width:57%;">발표주제 및 내용</th>
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
     사전 준비물 (튜토리얼 세션)
====================================== -->

<div class="section-title">

  <span class="icon">▣</span>

  사전 준비물

</div>

<table class="info-table" style="word-break: keep-all;">

  <tr>
    <th>노트북 + 충전기</th>
    <td>
      Windows 10/11 또는 macOS. 사양 무관
      (GPU 필요 없음 — 학습은 Google Colab에서 진행)
    </td>
  </tr>

  <tr>
    <th>Google 계정 1개</th>
    <td>
      본인 계정. 개인 Gmail 권장
      (학교·회사 계정은 관리자 설정으로 Colab이 막혀 있을 수 있음)
    </td>
  </tr>

  <tr>
    <th>Chrome 브라우저</th>
    <td>
      위 Google 계정으로 로그인해 두고, 기본 브라우저로 설정
    </td>
  </tr>

  <tr>
    <th>인터넷</th>
    <td>
      강의장 Wi-Fi 사용 (연결이 불안하면 휴대폰 핫스팟 준비)
    </td>
  </tr>

  <tr>
    <th>Claude Code<br>API 키</th>
    <td>
      <strong>강의 당일 배포 예정</strong>
    </td>
  </tr>

</table>

<p style="
  text-align:center;
  font-size:17px;
  color:#555;
  line-height:1.8;
  margin-top:24px;
">

  워크샵 전에 아래 가이드에 따라 사전 준비(설치)를 마치고,
  실습 자료를 미리 내려받아 주시기 바랍니다.

</p>

<a
  href="https://drive.google.com/file/d/1sTfL_DgnqVpc1M4PqTXhUY9h4zZlD5yr/view?usp=drive_link"
  target="_blank"
  rel="noopener"
  class="button">

  사전 준비(설치) 가이드 다운로드

</a>

<a
  href="https://drive.google.com/file/d/1NJtBx1tjc-QowZ2devfKffNa5e3ibb_q/view?usp=drive_link"
  target="_blank"
  rel="noopener"
  class="button secondary">

  실습 자료 다운로드

</a>

<!-- ======================================
     등록비 안내
====================================== -->

<div class="section-title">

  <span class="icon">▣</span>

  등록비 안내

</div>

<table class="registration-table">

  <thead>

    <tr>

      <th style="width:22%;">
        구분
      </th>

      <th style="width:26%;">
        일반
      </th>

      <th style="width:26%;">
        학생
      </th>

      <th style="width:26%;">
        비고
      </th>

    </tr>

  </thead>

  <tbody>

    <tr class="early">

      <td>
        <strong>사전등록</strong>
      </td>

      <td>
        <strong>350,000원</strong>
      </td>

      <td>
        <strong>200,000원</strong>
      </td>

      <td>
        2026.09.21. - 10.02.
      </td>

    </tr>

    <tr class="onsite">

      <td>
        <strong>현장등록</strong>
      </td>

      <td>
        <strong>450,000원</strong>
      </td>

      <td>
        <strong>250,000원</strong>
      </td>

      <td></td>

    </tr>

  </tbody>

</table>

<!-- ======================================
     등록 안내
====================================== -->

<div class="notice-box">

  <ul>

    <li>
      등록비는
      <strong>튜토리얼 세션 포함</strong>입니다.
    </li>

    <li>
      <strong>사전등록기간 :</strong>
      2026.09.21.(월) - 2026.10.02.(금)
    </li>

    <li>
      <strong>결제방법 :</strong>
      신용카드 결제 및 계좌이체
    </li>

    <li>
      <strong>등록비 납부계좌 :</strong>
      우리은행, 1005-304-831659
      [예금주: 위성지능정보학회]
    </li>

    <li>
      등록비 입금 시 등록자명으로 입금해주시기 바라며,
      등록자명과 송금인이 다를 경우 반드시 학회 사무국
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
  font-size:17px;
  color:#555;
  line-height:1.8;
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
     특별세션 신청
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
     행사장 안내
====================================== -->

<div class="section-title">

  <span class="icon">▣</span>

  행사장 안내

</div>

<table class="info-table">

  <tr>

    <th>
      행사장
    </th>

    <td>
      코트야드 메리어트 평택
    </td>

  </tr>

  <tr>

    <th>
      주소
    </th>

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

<!-- ======================================
     후원
====================================== -->

<div class="section-title">

  <span class="icon">▣</span>

  후원

</div>

<div class="sponsor-box">

  (주)인성디앤엠

</div>

<!-- ======================================
     마무리
====================================== -->

<p style="
  margin-top:38px;
  padding-top:24px;

  border-top:1px solid #e1e5e9;

  text-align:center;

  font-size:17px;
  line-height:1.85;

  color:#555;
">

  회원 여러분들의 많은 관심과 참여를 부탁드립니다.

  <strong style="
    color:#17365d;
    font-size:18px;
  ">

    위성지능정보학회 드림

  </strong>

</p>

</div>
