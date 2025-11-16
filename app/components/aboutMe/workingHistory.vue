<template>
  <History 
    :historyItems="workHistorys"
  />
</template>

<script setup lang="ts">
import type { HistoryItem } from '~/types/news'
import History from './history.vue'
const workHistorys: HistoryItem[] = [
  {
    color: 'blue',
    year: '2021 Oct - Now',
    header: 'Swivel Software (Canada),<br>SOFTWARE ENGINEER',
    awards: [
      "Led and mentored a cross-functional team of four engineers, scheduling meetings, tracking progress and providing training to ensure high code quality, timely delivery, and effective collaboration.",
      "Architected and maintained full-stack enterprise applications using .NET Core (C#), ASP.NET APIs, SQL Server, Python and Vue.js, supporting scalability and reliability.",
      "Primary designed and implemented an OCR-based PDF processing system featuring a dynamic template builder, enabling customers to configure data extraction for multiple invoice formats and validate results prior to submission.",
      "mproved SQL Server performance by redesigning schemas and optimizing queries, achieving a 70% reduction in update times and enhancing data integrity.",
      "Automated backup and cleanup workflows for databases and file servers, cutting redundant storage usage by 60%.",
      "Improved user experience and security with Single Sign-On (SSO) login flows across distributed applications. OAuth 2.0 (OIDC), JWT"
    ]
  },
  {
    color: 'cyan',
    year: '2019 Aug - 2021 Aug',
    header: 'Swivel Software (Hong Kong),<br> SOFTWARE ENGINEER',
    awards: [
      "Designed an implemented a high-volume data transformation platform in C#/.NET, processing more than 10,000 files daily across multiple formats (XML, JSON, EDI, TXT, XLSX) via SFTP and REST APIs for import/export declarations.",
      "Primary designed and built a job scheduling and automation system with SQL Server and C# services, reducing manual processing workloads by 60%.",
      "Designed and implemented an error detection and real-time alerting system, cutting issue response times by 50% through automated email notifications.",
      "Collaborated with external stakeholders to gather requirements, design integration solutions and support successful business partnerships."
    ]
  },
  {
    color: 'green',
    year: '2016 Sep - 2019 Aug',
    header: 'MATH IS TRUTH EDUCATION CENTER<br> PARTNERSHIP AND FULL-TIME TUTORIAL MATHEMATICS TEACHER',
    awards: [
      "Help students improve DSE results from fail to pass within half a year.",
      "More than 50% of students got 5 or above in DSE Mathematics.",
      "Design a database system to improve student management and reduce 30% manpower."
    ]
  },
  {
    color: 'orange',
    year: '2014 Jul - 2017 Aug',
    header: 'AIA Group Limited,<br> Financial Planner',
    awards: ["Provided professional advice and solutions to clients, answering inquiries and resolving issues.", "Managed a portfolio of clients, building strong relationships and maintaining trust.", "Communicated clearly in English and Mandarin to meet clients’ needs.", "Ensured compliance with industry regulations while delivering high-quality client service."]
  }
]
</script>

<style scoped>
/* Optional: smooth dot hover */
</style>
