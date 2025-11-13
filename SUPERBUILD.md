# Super Build Request

@copilot Please help with this modification request.

# Project Modification Request

## User Request
جميع الازرار و الانتقالات لا تعمل, يجب ان يكون كل شئ يعمل بكفاءة, فقط حسابات المعلمين يستطيعون إدارة المحتوى التعليمي, من رفع, تعديل, نشر, تحليل, وضع امتحانات و اضف كل الخصائص التي تجعل هذه المنصة قوية و فريده

## Analysis & Requirements
أرى المشكلة! التطبيق لا يعمل بسبب خطأ في ملف البدء المفقود. سأقوم بإصلاح هذه المشكلة وبناء منصة تعليمية قوية وفريدة حسب وصفك.

فهمت! منصة تعليمية متكاملة للمعلمين والطلاب 🎯

**الميزات الأساسية:**
✅ نظام إدارة المحتوى التعليمي (للمعلمين فقط)
✅ رفع وتنظيم الدروس والمواد التعليمية
✅ إنشاء وإدارة الامتحانات والاختبارات
✅ تحليل أداء الطلاب والإحصائيات
✅ نظام تفاعلي للطلاب مع المحتوى
✅ لوحة تحكم شاملة للمعلمين
✅ نظام إشعارات ومتابعة التقدم

**الصفحات المقترحة:**
📄 الصفحة الرئيسية والدخول
📄 لوحة تحكم المعلم
📄 إدارة المحتوى والدروس
📄 إنشاء وإدارة الامتحانات
📄 واجهة الطلاب للتعلم
📄 تحليل الأداء والإحصائيات

**التصميم:**
🎨 تصميم تعليمي احترافي بألوان هادئة (أزرق، أخضر، أبيض) مع واجهة سهلة الاستخدام وتركيز على تجربة التعلم

**المميزات الفريدة:**
🚀 نظام ذكي لتتبع تقدم الطلاب
🚀 أدوات تفاعلية للتعلم
🚀 نظام تقييم متطور
🚀 إحصائيات مفصلة للأداء

هل هذا يناسب ما تريد؟ يمكنك تأكيد البدء أو طلب تعديلات.

## Database Connection

**Database URL (PostgreSQL):**
```
${{7dc3fc8e-2257-4f43-a099-e2fe2ef414b4.DATABASE_URL}}
```

Use this connection URL if the modification requires database changes, migrations, or database-related fixes.

## Runtime Deployment Logs

Here are the **latest 100 runtime deployment logs** (newest first) showing actual application behavior and errors:

```
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] prisma:error 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] Invalid `prisma.user.findUnique()` invocation:
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] Prisma Client could not locate the Query Engine for runtime "linux-musl".
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] This happened because Prisma Client was generated for "linux-musl-openssl-3.0.x", but the actual deployment required "linux-musl".
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] Add "linux-musl" to `binaryTargets` in the "schema.prisma" file and run `prisma generate` after saving it:
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] generator client {
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   provider      = "prisma-client-js"
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   binaryTargets = ["native", "linux-musl"]
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] }
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] 
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY] The following locations have been searched:
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   /app/node_modules/.prisma/client
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   /app/node_modules/@prisma/client
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   /tmp/prisma-engines
[2025-11-13T17:45:50.341Z] INFO: [DEPLOY]   /app/prisma
[2025-11-13T17:45:50.341Z] ERROR: [DEPLOY] Signup error: PrismaClientInitializationError: 
[2025-11-13T17:45:50.341Z] ERROR: [DEPLOY] Invalid `prisma.user.findUnique()` invocation:
[2025-11-13T17:45:50.341Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:50.341Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] This happened because Prisma Client was generated for "linux-musl-openssl-3.0.x", but the actual deployment required "linux-musl".
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] Add "linux-musl" to `binaryTargets` in the "schema.prisma" file and run `prisma generate` after saving it:
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] generator client {
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   provider      = "prisma-client-js"
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   binaryTargets = ["native", "linux-musl"]
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] }
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] The following locations have been searched:
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   /app/node_modules/.prisma/client
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   /app/node_modules/@prisma/client
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   /tmp/prisma-engines
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   /app/prisma
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at $n.handleRequestError (/app/node_modules/@prisma/client/runtime/library.js:121:7615)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at $n.handleAndLogRequestError (/app/node_modules/@prisma/client/runtime/library.js:121:6623)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at $n.request (/app/node_modules/@prisma/client/runtime/library.js:121:6307)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async l (/app/node_modules/@prisma/client/runtime/library.js:130:9633)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async l (/app/.next/server/app/api/auth/signup/route.js:1:1225)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async /app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:42484
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async eI.execute (/app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:32486)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async eI.handle (/app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:43737)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async doRender (/app/node_modules/next/dist/server/base-server.js:1333:42)
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]     at async cacheEntry.responseCache.get.routeKind (/app/node_modules/next/dist/server/base-server.js:1555:28) {
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   clientVersion: '5.22.0',
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY]   errorCode: undefined
[2025-11-13T17:45:50.345Z] ERROR: [DEPLOY] }
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] prisma:error 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] Invalid `prisma.user.findUnique()` invocation:
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   /tmp/prisma-engines
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   /app/prisma
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] Prisma Client could not locate the Query Engine for runtime "linux-musl".
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] This happened because Prisma Client was generated for "linux-musl-openssl-3.0.x", but the actual deployment required "linux-musl".
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] Signup error: PrismaClientInitializationError: 
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] Invalid `prisma.user.findUnique()` invocation:
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] Add "linux-musl" to `binaryTargets` in the "schema.prisma" file and run `prisma generate` after saving it:
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] 
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] generator client {
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] Prisma Client could not locate the Query Engine for runtime "linux-musl".
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   provider      = "prisma-client-js"
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:56.298Z] ERROR: [DEPLOY] This happened because Prisma Client was generated for "linux-musl-openssl-3.0.x", but the actual deployment required "linux-musl".
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   binaryTargets = ["native", "linux-musl"]
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] }
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] 
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY] The following locations have been searched:
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   /app/node_modules/.prisma/client
[2025-11-13T17:45:56.298Z] INFO: [DEPLOY]   /app/node_modules/@prisma/client
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] Add "linux-musl" to `binaryTargets` in the "schema.prisma" file and run `prisma generate` after saving it:
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] generator client {
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   provider      = "prisma-client-js"
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   binaryTargets = ["native", "linux-musl"]
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] }
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] 
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY] The following locations have been searched:
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   /app/node_modules/.prisma/client
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   /app/node_modules/@prisma/client
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   /tmp/prisma-engines
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   /app/prisma
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at $n.handleRequestError (/app/node_modules/@prisma/client/runtime/library.js:121:7615)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at $n.handleAndLogRequestError (/app/node_modules/@prisma/client/runtime/library.js:121:6623)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at $n.request (/app/node_modules/@prisma/client/runtime/library.js:121:6307)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async l (/app/node_modules/@prisma/client/runtime/library.js:130:9633)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async l (/app/.next/server/app/api/auth/signup/route.js:1:1225)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async /app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:42484
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async eI.execute (/app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:32486)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async eI.handle (/app/node_modules/next/dist/compiled/next-server/app-route.runtime.prod.js:6:43737)
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]     at async doRender (/app/node_modules/next/dist/server/base-server.js:1333:42) {
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   clientVersion: '5.22.0',
[2025-11-13T17:45:56.302Z] ERROR: [DEPLOY]   errorCode: undefined
```


📝 Note: Showing latest 100 of 101 total runtime log entries


## Instructions for GitHub Copilot
Please analyze the current repository structure and make the following changes:

1. **Review existing code**: Check the current implementation in the repository
2. **Understand the context**: Look at existing components, pages, and styling
3. **Review deployment logs**: Check the logs above for any errors or warnings that might be relevant
4. **Apply requested changes**: Make the necessary modifications to address the user's request
5. **Maintain consistency**: Ensure changes follow the existing code style and patterns
6. **Test your changes**: Make sure the modifications don't break existing functionality

**Important**: This is a MODIFICATION to an existing project, not a new project. Please review the existing codebase before making changes.

---
*Generated on: 2025-11-13T17:54:07.559Z*

---
Generated on: 2025-11-13T17:54:08.044Z
