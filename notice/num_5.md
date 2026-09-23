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
   Day 제목
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

  border-right: 1px solid rgba(255,255,255,0.3);

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
   내용
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
   특별세션
========================================= */

.special-row td {
  background: #f2f7fc !important;
}

.special-title {
  display: inline-block;

  margin-bottom: 9px;
  padding: 5px 14px;

  background: #17365d;

  border-radius: 5px;

  color: #ffffff;

  font-size: 18px;
  font-weight: 700;

  line-height: 1.5;
}

.special-topic {
  color: #25384d;

  font-size: 18px;
  font-weight: 700;

  line-height: 1.65;
}

.special-chair {
  font-size: 17px;

  line-height: 1.7;
}

.special-chair strong {
  color: #17365d;
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


/* 사전등록 */

.registration-table .early td {
  background: #edf5fc;

  color: #17365d;
}


/* 현장등록 */

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

  .special-title {
    font-size: 16px;
  }

  .special-topic {
    font-size: 16px;
  }

  .special-chair {
    font-size: 15px;
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

  .button {
    font-size: 17px;
  }

}

</style>


<div class="workshop-wrap">

<br><br>


<!-- ======================================
     제목
====================================== -->

<div class="gayheader">
  <span>제3회 위성지능정보학회 워크샵 개최 안내</span>
  <div></div>
</div>

<br>


<p style="
  text-align:right;
  font-size:15px;
  color:#7a7a7a;
  margin-bottom:30px;
">
  등록일자: 2026년 9월 21일
</p>


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

        <span class="duration">
          (30’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          등록
        </strong>

      </td>


      <td class="presenter-cell"></td>

    </tr>


    <!-- 개회사 -->

    <tr class="opening-row">

      <td class="time-cell">

        09:30–09:40

        <span class="duration">
          (10’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          개회사
        </strong>

      </td>


      <td class="presenter-cell">

        위성지능정보학회장

      </td>

    </tr>


    <!-- Tutorial I -->

    <tr class="tutorial-row">

      <td class="time-cell">

        09:40–11:10

        <span class="duration">
          (90’)
        </span>

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

        <span class="duration">
          (20’)
        </span>

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

        <span class="duration">
          (90’)
        </span>

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

        <span class="duration">
          (60’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          자유토론 및 오찬
        </strong>

      </td>


      <td class="presenter-cell"></td>

    </tr>


    <!-- Coffee Break -->

    <tr class="break-row">

      <td class="time-cell">

        14:00–14:30

        <span class="duration">
          (30’)
        </span>

      </td>


      <td class="content-cell">

        Coffee Break (휴식)

      </td>


      <td class="presenter-cell"></td>

    </tr>


    <!-- ======================================
         특별세션 I
    ====================================== -->

    <tr class="special-row">

      <td class="time-cell">

        14:30–15:50

        <span class="duration">
          (80’)
        </span>

      </td>


      <td class="content-cell">

        <div class="special-title">

          특별세션 Ⅰ

        </div>


        <div class="special-topic">

          EMSA INR 기술 개발 및 검증

        </div>

      </td>


      <td class="presenter-cell special-chair">

        <strong>
          좌장
        </strong>

        <br>

        정형섭

        <br>

        (서울시립대학교)

      </td>

    </tr>


    <!-- Coffee Break -->

    <tr class="break-row">

      <td class="time-cell">

        15:50–16:10

        <span class="duration">
          (20’)
        </span>

      </td>


      <td class="content-cell">

        Coffee Break (휴식)

      </td>


      <td class="presenter-cell"></td>

    </tr>


    <!-- ======================================
         특별세션 II
    ====================================== -->

    <tr class="special-row">

      <td class="time-cell">

        16:10–17:30

        <span class="duration">
          (80’)
        </span>

      </td>


      <td class="content-cell">

        <div class="special-title">

          특별세션 Ⅱ

        </div>


        <div class="special-topic">

          지질·해양·환경 분야 GeoAI 활용기술 개발

        </div>

      </td>


      <td class="presenter-cell special-chair">

        <strong>
          좌장
        </strong>

        <br>

        정형섭

        <br>

        (서울시립대학교)

      </td>

    </tr>


    <!-- 만찬 -->

    <tr class="meal-row">

      <td class="time-cell">

        17:30–19:00

        <span class="duration">
          (90’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          자유토론 및 만찬
        </strong>

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


    <!-- 등록 -->

    <tr>

      <td class="time-cell">

        09:00–09:30

        <span class="duration">
          (30’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          등록
        </strong>

      </td>


      <td class="presenter-cell"></td>

    </tr>


    <!-- 현장 탐방 -->

    <tr class="field-row">

      <td class="time-cell">

        09:30–12:00

        <span class="duration">
          (150’)
        </span>

      </td>


      <td class="content-cell">

        <strong>
          현장 탐방(국립생태원)
        </strong>

      </td>


      <td class="presenter-cell"></td>

    </tr>


  </tbody>

</table>


<!-- ======================================
     등록비 안내
====================================== -->

<div class="section-title">

  <span class="icon">
    ▣
  </span>

  등록비 안내

</div>


<table class="registration-table">

  <thead>

    <tr>

      <th style="width:22%;">
        구분
      </th>

      <th style="width:26%;">
        정회원(일반)
      </th>

      <th style="width:26%;">
        학생회원
      </th>

      <th style="width:26%;">
        비고
      </th>

    </tr>

  </thead>


  <tbody>


    <tr class="early">

      <td>
        <strong>
          사전등록
        </strong>
      </td>


      <td>
        <strong>
          350,000원
        </strong>
      </td>


      <td>
        <strong>
          200,000원
        </strong>
      </td>


      <td></td>

    </tr>


    <tr class="onsite">

      <td>
        <strong>
          현장등록
        </strong>
      </td>


      <td>
        <strong>
          450,000원
        </strong>
      </td>


      <td>
        <strong>
          250,000원
        </strong>
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
      <strong>
        튜토리얼 세션 포함
      </strong>
      입니다.

    </li>


    <li>

      <strong>
        사전등록마감 :
      </strong>

      ~ 2026.10.02.(금)까지

    </li>


    <li>

      <strong>
        결제방법 :
      </strong>

      신용카드 결제 및 계좌이체

    </li>


    <li>

      <strong>
        등록비 납부계좌 :
      </strong>

      우리은행, 1005-304-831659
      [예금주: 위성지능정보학회]

    </li>


    <li>

      등록비 입금 시 등록자명으로 입금해주시기 바라며,
      등록자명과 송금인이 다를 경우 반드시 학회 사무국

      (<a href="mailto:satiis.society@gmail.com">
        satiis.society@gmail.com
      </a>)

      으로 연락바랍니다.

    </li>

  </ul>

</div>


<!-- ======================================
     사전등록
====================================== -->

<div class="section-title">

  <span class="icon">
    ▣
  </span>

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

  <span class="icon">
    ▣
  </span>

  특별세션 신청 안내

</div>


<div class="notice-box">

  특별세션 신청방법 및 등록비는
  <strong>
    학회 사무국으로 별도 문의
  </strong>
  하여 주시기 바랍니다.

</div>


<!-- ======================================
     행사장 안내
====================================== -->

<div class="section-title">

  <span class="icon">
    ▣
  </span>

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


<br>


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

  <br><br>

  <strong style="
    color:#17365d;
    font-size:18px;
  ">

    위성지능정보학회 드림

  </strong>

</p>


</div>
```