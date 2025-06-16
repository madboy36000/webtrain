    const translations = {
        en: {
            header_subtitle: 'Engineering & Product Development Procedure (EPDP) V2.0',
            live_process: 'Live Process',
            utils_title: 'Project Utilities & NAS Folder Generator',
            utils_proj_name_label: 'Project Name',
            utils_proj_name_placeholder: 'e.g., Universal Pendant System',
            utils_proj_code_label: 'Project Code',
            utils_proj_code_placeholder: 'e.g., P001',
            utils_generate_btn: 'Generate NAS Folder Path',
            utils_folder_type_label: 'Select Deliverable/Folder Type for this Phase',
            utils_proj_name_code_error: 'Please enter a valid Project Name and Project Code.',
            utils_folder_type_error: 'Please select a Deliverable/Folder Type.',
            search_placeholder: 'Search',
            lifecycle_title: 'The Product Development Lifecycle',
            lifecycle_phase: 'Phase',
            lifecycle_subtitle: 'An interactive guide to the Limi Lighting EPDP. Click any phase or decision gate to explore details. This process is mandatory for all new product development and significant updates.',
            inputs_section_title: 'Inputs for this Step/Phase',
            activities_section_title: 'Key Activities',
            outputs_section_title: 'Outputs & Deliverables',
            view_checklist: 'View DG Checklist',
            modal_close_btn: 'Close',
            go_back_btn: 'Go Back',
            next_phase_btn: 'Next Phase',
            role_select_label: 'Select Your Role to Highlight Responsibilities',
            role_default: 'Default Process View',
            role_pm: 'Product Manager (Umer)',
            role_le: 'Lead Engineer (Mark)',
            role_de: 'Design Engineer(s)',
            role_purchasing: 'Purchasing Lead',
            role_production: 'Production Lead',
            role_qc: 'QC Lead',
            role_admin: 'Admin Lead (Cherry/Karen)',
            role_pm_desc: 'Owns product vision, business case, market requirements, and is the final approver at all Decision Gates.',
            role_le_desc: 'Accountable for technical design, engineering execution, internal validation, and creation of the PPDP.',
            role_de_desc: 'Executes specific engineering tasks (CAD, prototyping, testing) under LE guidance.',
            role_purchasing_desc: 'Owns supplier sourcing, RFQs, sample POs, and external sample validation based on approved PPDP.',
            role_production_desc: 'Owns trial production, final assembly SOPs, and mass production readiness.',
            role_qc_desc: 'Owns quality standards, develops ITPs, conducts FAI, and manages QC for samples & production.',
            role_admin_desc: 'Ensures EPDVP process adherence, document control, meeting facilitation, and NAS audits.',
            phase_1_name: 'Concept & Feasibility',        phase_1_tag: 'Define Vision & Validate Idea',
            phase_2_name: 'Detailed Design & Low-Fi Proto', phase_2_tag: 'Develop & Test Concept',
            phase_3_name: 'Refined Design & Hi-Fi Proto',  phase_3_tag: 'Finalize & Prove Design (PPDP)',
            phase_4_name: 'Sourcing & External Samples',  phase_4_tag: 'Supplier Engagement (Purchasing)',
            phase_5_name: 'Trial Production & Validation', phase_5_tag: 'Prove Production Process',
            phase_6_name: 'Mass Production Launch',       phase_6_tag: 'Scale & Monitor',
            phase_7_name: 'Post-Launch & Improvement',  phase_7_tag: 'Learn & Iterate',
            tab_roles: 'RACI & Roles',
            tab_governance: 'Governance & Docs',
            tab_special: 'Special Cases',
            tab_faqs: 'FAQs',
            tab_glossary: 'Glossary & Links',
            tab_chart: 'Phase Effort',
            section_objective: "Objective",
            section_input: "Input",
            section_action_pm: "Action (Product Manager)",
            section_action_le: "Action (Lead Engineer)",
            section_action_eng_team: "Action (Engineering Team)",
            section_action_purchasing: "Action (Purchasing Lead)",
            section_action_production: "Action (Production Lead)",
            section_action_qc: "Action (QC Lead)",
            section_action_admin: "Action (Admin Lead)",
            section_output: "Output",
            responsible: "Responsible",
            accountable: "Accountable",
            consulted: "Consulted",
            informed: "Informed",
            select_phase_prompt: "Select a phase above to see details.",
            no_deliverables_for_path: "No specific deliverables for path generation in this phase."
        },
        cn: {
            header_subtitle: '工程与产品开发流程 (EPDP) V2.0',
            live_process: '流程已激活 (强制执行)',
            utils_title: '项目工具与NAS文件夹生成器',
            utils_proj_name_label: '项目名称',
            utils_proj_name_placeholder: '例如, 通用吊灯系统',
            utils_proj_code_label: '项目代码',
            utils_proj_code_placeholder: '例如, P001',
            utils_generate_btn: '生成NAS文件夹路径',
            utils_folder_type_label: '选择此阶段的交付成果/文件夹类型',
            utils_proj_name_code_error: '请输入有效的项目名称和项目代码。',
            utils_folder_type_error: '请选择一个交付成果/文件夹类型。',
            search_placeholder: '搜索',
            lifecycle_title: '产品开发生命周期',
            lifecycle_phase: '阶段',
            lifecycle_subtitle: 'Limi Lighting EPDP 交互指南。点击任何阶段或决策门以了解详情。此流程对所有新产品开发和重大更新具有强制性。',
            inputs_section_title: '此步骤/阶段的输入',
            activities_section_title: '关键活动',
            outputs_section_title: '输出与交付成果',
            view_checklist: '查看决策门清单',
            modal_close_btn: '关闭',
            go_back_btn: '返回',
            next_phase_btn: '下一阶段',
            role_select_label: '选择您的角色以突出显示职责',
            role_default: '默认流程视图',
            role_pm: '产品经理 (Umer)',
            role_le: '首席工程师 (Mark)',
            role_de: '设计工程师',
            role_purchasing: '采购主管',
            role_production: '生产主管',
            role_qc: '品控主管',
            role_admin: '行政主管 (Cherry/Karen)',
            role_pm_desc: '负责产品愿景、商业论证、市场需求，并在所有决策门拥有最终批准权。',
            role_le_desc: '负责技术设计、工程执行、内部验证及PPDP的创建。',
            role_de_desc: '在首席工程师指导下执行具体的工程任务（CAD、原型、测试）。',
            role_purchasing_desc: '负责供应商开发、询价、样品采购订单及基于批准PPDP的外部样品验证。',
            role_production_desc: '负责试生产、最终装配SOP及量产准备。',
            role_qc_desc: '负责质量标准、制定ITP、执行FAI及样品和生产的品控管理。',
            role_admin_desc: '确保EPDP流程的遵守、文件管控、会议协调及NAS审计。',
            phase_1_name: '概念与可行性',        phase_1_tag: '定义愿景与验证想法',
            phase_2_name: '详细设计与低保真原型', phase_2_tag: '开发与测试概念',
            phase_3_name: '精细设计与高保真原型',  phase_3_tag: '定型与验证设计 (PPDP)',
            phase_4_name: '寻源与外部样品',  phase_4_tag: '供应商对接 (采购主导)',
            phase_5_name: '试生产与流程验证', phase_5_tag: '验证生产流程',
            phase_6_name: '量产启动',       phase_6_tag: '规模化与监控',
            phase_7_name: '上市后与持续改进',  phase_7_tag: '学习与迭代',
            tab_roles: 'RACI与角色职责',
            tab_governance: '治理与文档规范',
            tab_special: '特殊情况处理',
            tab_faqs: '常见问题解答',
            tab_glossary: '术语表与文档链接',
            tab_chart: '阶段投入分析',
            section_objective: "目标",
            section_input: "输入",
            section_action_pm: "行动 (产品经理)",
            section_action_le: "行动 (首席工程师)",
            section_action_eng_team: "行动 (工程团队)",
            section_action_purchasing: "行动 (采购主管)",
            section_action_production: "行动 (生产主管)",
            section_action_qc: "行动 (品控主管)",
            section_action_admin: "行动 (行政主管)",
            section_output: "输出",
            responsible: "负责 (R)",
            accountable: "批准/当责 (A)",
            consulted: "咨询 (C)",
            informed: "知会 (I)",
            select_phase_prompt: "请选择以上阶段以查看详情。",
            no_deliverables_for_path: "此阶段无特定交付成果可供路径生成。"
        }
    };

    const phaseOrder = ['phase-1','phase-2','phase-3','phase-4','phase-5','phase-6','phase-7'];


    const raciData = [
        { activity_en: 'Product Brief Creation (1.1)', activity_cn: '产品简报创建 (1.1)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Product Brief Clarification Doc (1.1)', activity_cn: '产品简报澄清文档 (1.1)', PM: 'R', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'R' }, { activity_en: 'Preliminary Research & Ideation (1.2)', activity_cn: '初步研究与构思 (1.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Conceptual Designs (1.3)', activity_cn: '概念设计 (1.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Concept Review & Selection (1.4)', activity_cn: '概念评审与选择 (1.4)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'DG1 Approval (Concept)', activity_cn: '决策门1批准 (概念)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' },
        { activity_en: 'Detailed 3D CAD (2.1)', activity_cn: '详细3D CAD (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Initial 2D Drawings (2.1)', activity_cn: '初步2D图纸 (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Preliminary BOM (2.1)', activity_cn: '初步BOM (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototyping Plan (2.2)', activity_cn: '低保真原型计划 (2.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototype Creation & Iteration (2.3)', activity_cn: '低保真原型制作与迭代 (2.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Internal DFM/DFA Review (part of 2.3)', activity_cn: '内部DFM/DFA评审 (2.3一部分)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototype Review (2.4)', activity_cn: '低保真原型评审 (2.4)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'DG2 Approval (Design Freeze)', activity_cn: '决策门2批准 (设计冻结)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' },
        { activity_en: 'Refine Design to V1.0 (CAD, 2D, BOM) (3.1)', activity_cn: '精细化设计至V1.0 (CAD, 2D, BOM) (3.1)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Material Selection for Hi-Fi Proto (3.1)', activity_cn: '高保真原型材料选择 (3.1)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Hi-Fi Prototyping Plan (3.2)', activity_cn: '高保真原型计划 (3.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Hi-Fi Prototype Creation & Testing (3.3)', activity_cn: '高保真原型制作与测试 (3.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'R', ADMIN: 'I' }, { activity_en: 'DFM/DFA Review & Report (3.4)', activity_cn: 'DFM/DFA评审与报告 (3.4)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'I' }, { activity_en: 'Create Pre-Production Design Package (PPDP) (3.5)', activity_cn: '创建预生产设计包 (PPDP) (3.5)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'DG3 Approval (PPDP Handoff)', activity_cn: '决策门3批准 (PPDP交接)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'C' },
        { activity_en: 'PPDP Review by Purchasing (4.1)', activity_cn: '采购评审PPDP (4.1)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Supplier Identification & Shortlisting (4.2)', activity_cn: '供应商识别与筛选 (4.2)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'RFQ Package Prep & Send (Samples) (4.3)', activity_cn: '准备并发送样品RFQ包 (4.3)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Quotation Analysis & Supplier Selection (Samples) (4.4)', activity_cn: '报价分析与样品供应商选择 (4.4)', PM: 'A', LE: 'C', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Sample PO Placement & Financial Approval (4.5)', activity_cn: '样品PO下达与财务审批 (4.5)', PM: 'A', LE: 'I', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'Sample Production Follow-Up (4.6)', activity_cn: '样品生产跟进 (4.6)', PM: 'I', LE: 'I', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Sample Reception & Initial Verification (4.7)', activity_cn: '样品接收与初步验证 (4.7)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'External Sample Evaluation & Testing (EPDVP 5.1-5.2)', activity_cn: '外部样品评估与测试 (EPDVP 5.1-5.2)', PM: 'C', LE: 'R', DE: 'C', PURCHASING: 'C', PRODUCTION: 'I', QC: 'A', ADMIN: 'I' }, { activity_en: 'Golden Sample Approval & Documentation (EPDVP 5.4)', activity_cn: '黄金样品批准与记录 (EPDVP 5.4)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'C', QC: 'R', ADMIN: 'C' }, { activity_en: 'DG4 Approval (External Samples Validated)', activity_cn: '决策门4批准 (外部样品已验证)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'I', QC: 'C', ADMIN: 'C' },
        { activity_en: 'Trial Production Planning (6.1)', activity_cn: '试生产计划 (6.1)', PM: 'C', LE: 'C', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'C', ADMIN: 'I' }, { activity_en: 'Order Components for Trial Run (6.1)', activity_cn: '订购试生产组件 (6.1)', PM: 'C', LE: 'I', DE: 'I', PURCHASING: 'A', PRODUCTION: 'C', QC: 'I', ADMIN: 'I' }, { activity_en: 'Pre-Trial Briefing & Setup (6.2)', activity_cn: '试生产前会议与准备 (6.2)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'A', QC: 'C', ADMIN: 'I' }, { activity_en: 'Execute Trial Production & Monitor (6.3)', activity_cn: '执行试生产与监控 (6.3)', PM: 'C', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'Post-Trial Review & Analysis (6.4)', activity_cn: '试生产后评审与分析 (6.4)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'R', ADMIN: 'C' }, { activity_en: 'Finalize Production Documentation (SOPs, QC etc.) (6.5)', activity_cn: '最终确定生产文档 (SOP, QC等) (6.5)', PM: 'I', LE: 'A', DE: 'C', PURCHASING: 'I', PRODUCTION: 'R', QC: 'A', ADMIN: 'C' }, { activity_en: 'Create Final Production Package (6.5)', activity_cn: '创建最终生产包 (6.5)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'DG5 Approval (Readiness for Mass Production)', activity_cn: '决策门5批准 (量产准备就绪)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'C', ADMIN: 'C' },
        { activity_en: 'FMPR Preparation (7.1)', activity_cn: '首次量产准备 (7.1)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'FMPR Execution & Monitoring (7.2)', activity_cn: '首次量产执行与监控 (7.2)', PM: 'C', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'Post-FMPR Review & Stabilization (7.3)', activity_cn: '首次量产后评审与流程稳定 (7.3)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'R', ADMIN: 'C' }, { activity_en: 'Ongoing Mass Production & Monitoring (7.4)', activity_cn: '持续量产与常规监控 (7.4)', PM: 'I', LE: 'I', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' },
        { activity_en: 'Data Collection & Analysis (All Depts) (8.1)', activity_cn: '数据收集与分析 (各部门) (8.1)', PM: 'C', LE: 'R', DE: 'I', PURCHASING: 'R', PRODUCTION: 'R', QC: 'R', ADMIN: 'A' }, { activity_en: 'Periodic Post-Launch Review Meetings (8.2)', activity_cn: '定期上市后评审会议 (8.2)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'C' }, { activity_en: 'Implementing Improvements (Assigned Leads) (8.3)', activity_cn: '实施改进 (指定负责人) (8.3)', PM: 'A', LE: 'C', DE: 'C', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'Lessons Learned & Knowledge Base Update (8.4)', activity_cn: '经验教训与知识库更新 (8.4)', PM: 'R', LE: 'A', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }
    ]; 

    const fullTabContentData = {
        roles: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_roles"></h3><p class="mb-6 text-gray-600">Click a role card to filter the RACI matrix and see their primary responsibilities within each phase. (R=Responsible, A=Accountable, C=Consulted, I=Informed)</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6" id="role-card-container">
                <div class="role-card border-2 p-4 rounded-lg" data-role="PM"><h4 class="font-bold text-teal-700" data-lang="role_pm"></h4><p class="text-sm text-gray-600" data-lang="role_pm_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="LE"><h4 class="font-bold text-teal-700" data-lang="role_le"></h4><p class="text-sm text-gray-600" data-lang="role_le_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="DE"><h4 class="font-bold text-teal-700" data-lang="role_de"></h4><p class="text-sm text-gray-600" data-lang="role_de_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="PURCHASING"><h4 class="font-bold text-teal-700" data-lang="role_purchasing"></h4><p class="text-sm text-gray-600" data-lang="role_purchasing_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="PRODUCTION"><h4 class="font-bold text-teal-700" data-lang="role_production"></h4><p class="text-sm text-gray-600" data-lang="role_production_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="QC"><h4 class="font-bold text-teal-700" data-lang="role_qc"></h4><p class="text-sm text-gray-600" data-lang="role_qc_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="ADMIN"><h4 class="font-bold text-teal-700" data-lang="role_admin"></h4><p class="text-sm text-gray-600" data-lang="role_admin_desc"></p></div>
            </div>
            <div class="overflow-x-auto"><table id="raci-table" class="min-w-full w-full bg-white border border-gray-200 text-sm"><thead><tr class="bg-gray-100"><th class="py-2 px-3 text-left font-semibold sticky left-0 z-20 bg-gray-100">Activity/Deliverable (EPDVP Ref)</th><th class="py-2 px-3 text-center font-semibold" data-lang="role_pm" title="${translations.en.role_pm_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_le" title="${translations.en.role_le_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_de" title="${translations.en.role_de_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_purchasing" title="${translations.en.role_purchasing_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_production" title="${translations.en.role_production_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_qc" title="${translations.en.role_qc_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_admin" title="${translations.en.role_admin_desc}"></th></tr></thead><tbody>
            </tbody></table></div>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_roles"></h3><p class="mb-6 text-gray-600">点击角色卡片以筛选RACI矩阵并查看其在各阶段的主要职责。(R=负责, A=批准/当责, C=咨询, I=知会)</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6" id="role-card-container">
                <div class="role-card border-2 p-4 rounded-lg" data-role="PM"><h4 class="font-bold text-teal-700" data-lang="role_pm"></h4><p class="text-sm text-gray-600" data-lang="role_pm_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="LE"><h4 class="font-bold text-teal-700" data-lang="role_le"></h4><p class="text-sm text-gray-600" data-lang="role_le_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="DE"><h4 class="font-bold text-teal-700" data-lang="role_de"></h4><p class="text-sm text-gray-600" data-lang="role_de_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="PURCHASING"><h4 class="font-bold text-teal-700" data-lang="role_purchasing"></h4><p class="text-sm text-gray-600" data-lang="role_purchasing_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="PRODUCTION"><h4 class="font-bold text-teal-700" data-lang="role_production"></h4><p class="text-sm text-gray-600" data-lang="role_production_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="QC"><h4 class="font-bold text-teal-700" data-lang="role_qc"></h4><p class="text-sm text-gray-600" data-lang="role_qc_desc"></p></div>
                <div class="role-card border-2 p-4 rounded-lg" data-role="ADMIN"><h4 class="font-bold text-teal-700" data-lang="role_admin"></h4><p class="text-sm text-gray-600" data-lang="role_admin_desc"></p></div>
            </div>
            <div class="overflow-x-auto"><table id="raci-table" class="min-w-full w-full bg-white border border-gray-200 text-sm"><thead><tr class="bg-gray-100"><th class="py-2 px-3 text-left font-semibold sticky left-0 z-20 bg-gray-100">活动/交付成果 (EPDVP参考)</th><th class="py-2 px-3 text-center font-semibold" data-lang="role_pm" title="${translations.cn.role_pm_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_le" title="${translations.cn.role_le_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_de" title="${translations.cn.role_de_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_purchasing" title="${translations.cn.role_purchasing_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_production" title="${translations.cn.role_production_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_qc" title="${translations.cn.role_qc_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_admin" title="${translations.cn.role_admin_desc}"></th></tr></thead><tbody>
            </tbody></table></div>`
        },
        governance: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_governance"></h3><p class="mb-6 text-gray-600">To ensure consistency, clarity, and traceability, all project documentation must adhere to the following governance standards. This rigid structure is essential for maintaining order and preventing file management chaos, which has been a significant issue in the past.</p><div class="space-y-6"><div><h4 class="sub-section-title">1. Mandatory NAS Folder Architecture</h4><p class="text-sm text-gray-600">All projects MUST use the standardized folder structure on the NAS server. This is not optional. The root for all development projects is <span class="nas-path">\\\\Limi_NAS\\Projects\\</span>. Folder names must be in English for universal accessibility.</p><p class="text-sm text-gray-600 mt-2">The structure for each project is: <span class="nas-path">[Project_Code]_[Project_Name_Unserscored]\\</span></p><p class="text-sm text-gray-600">Within this, phase folders are numbered and named (example for Phase 1):</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li><span class="nas-path">1_Concept_Feasibility\\</span></li><li class="ml-4"><span class="nas-path">01_Product_Brief_Clarifications\\</span></li><li class="ml-4"><span class="nas-path">02_Preliminary_Research_Ideation\\</span></li><li class="ml-4"><span class="nas-path">03_Conceptual_Designs\\</span></li><li class="ml-4"><span class="nas-path">04_Concept_Selection_Notes\\</span></li></ul><p class="text-sm text-gray-600 mt-1">This pattern continues for all phases. The "Project Utilities & NAS Folder Generator" tool above can assist in creating correct paths for deliverables. The Admin Lead (Cherry/Karen) is responsible for periodic audits of NAS structure adherence.</p></div><div><h4 class="sub-section-title">2. Strict File Naming Conventions</h4><p class="text-sm text-gray-600">Mandatory format: <span class="nas-path">[Project_Code]_[Document_Abbreviation]_[Version]_[YYYYMMDD].[ext]</span></p><p class="text-sm text-gray-600 mt-1">Examples:</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li>Product Brief Clarifications: <span class="nas-path">P001_PBC_V1.0_20250620.docx</span></li><li>Concept Selection Notes: <span class="nas-path">P001_CSN_V1.0_20250625.docx</span></li><li>Detailed CAD Model (Part): <span class="nas-path">P001_CAD_Housing_V1.1_20250710.sldprt</span></li><li>PPDP Package (Zip): <span class="nas-path">P001_PPDP_V1.0_20250815.zip</span></li></ul><p class="text-sm text-gray-600 mt-1">A full list of official Document Abbreviations will be maintained in the Glossary tab. Adherence is mandatory and will be audited.</p></div><div><h4 class="sub-section-title">3. Engineering Change Order (ECO) Process</h4><p class="text-sm text-gray-600">Any change to a design *after* its primary design phase's Decision Gate approval (especially after DG2 Design Freeze for core concept, or DG3 for PPDP components) MUST follow the formal ECO process. This is critical for change control and traceability.</p><p class="text-sm text-gray-600 mt-1">ECO Process Steps: Request Form Submission -> Technical & Commercial Impact Analysis (LE & PM) -> ECO Review Board (PM, LE, relevant stakeholders) Approval/Rejection -> Implementation & Documentation Update (if approved) -> Communication to all affected parties.</p><p class="text-sm text-gray-600 mt-1">The ECO Form Template is available in the Glossary & Links tab. ECOs are tracked and stored in <span class="nas-path">[Project_Code]_[Project_Name_Unserscored]\\ECOs\\</span>.</p></div><div><h4 class="sub-section-title">4. Version Control</h4><p class="text-sm text-gray-600">All key design documents (CAD files, 2D drawings, BOMs, specifications) must be version controlled. Major versions (V1.0, V2.0) signify approved releases after a Decision Gate. Minor versions (V1.1, V1.2) signify iterations within a phase or post-ECO updates. File names must reflect the correct version. Old versions should be archived in a subfolder named "_Archive" within the document's directory, not deleted.</p></div><div><h4 class="sub-section-title">5. Document Templates & Checklists</h4><p class="text-sm text-gray-600">Mandatory use of official Limi Lighting templates for all key EPDVP documents (PBFR, PPDP components, Test Reports, ECOs, etc.) and Decision Gate Checklists. Templates are linked in the Glossary & Links tab. Completed checklists must be signed and stored in the relevant Decision Gate folder in NAS.</p></div></div>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_governance"></h3><p class="mb-6 text-gray-600">为确保一致性、清晰性和可追溯性，所有项目文档必须遵守以下治理标准。这种严格的结构对于维护秩序和防止过去严重的文件管理混乱至关重要。</p><div class="space-y-6"><div><h4 class="sub-section-title">1. 强制性NAS文件夹架构</h4><p class="text-sm text-gray-600">所有项目都必须使用NAS服务器上的标准化文件夹结构。这不是可选项。所有开发项目的根目录是 <span class="nas-path">\\\\Limi_NAS\\Projects\\</span>。为确保通用可访问性，文件夹名称必须使用英文。</p><p class="text-sm text-gray-600 mt-2">每个项目的结构是：<span class="nas-path">[项目代码]_[项目名称_下划线连接]\\</span></p><p class="text-sm text-gray-600">在此结构内，阶段文件夹按编号和名称组织（以阶段1为例）：</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li><span class="nas-path">1_Concept_Feasibility\\</span> (概念与可行性)</li><li class="ml-4"><span class="nas-path">01_Product_Brief_Clarifications\\</span> (产品简报澄清)</li><li class="ml-4"><span class="nas-path">02_Preliminary_Research_Ideation\\</span> (初步研究与构思)</li><li class="ml-4"><span class="nas-path">03_Conceptual_Designs\\</span> (概念设计)</li><li class="ml-4"><span class="nas-path">04_Concept_Selection_Notes\\</span> (概念选择纪要)</li></ul><p class="text-sm text-gray-600 mt-1">此模式适用于所有阶段。上方的“项目工具与NAS文件夹生成器”可协助创建正确的交付成果路径。行政主管（Cherry/Karen）负责定期审计NAS结构的合规性。</p></div><div><h4 class="sub-section-title">2. 严格的文件命名约定</h4><p class="text-sm text-gray-600">强制格式：<span class="nas-path">[项目代码]_[文档缩写]_[版本]_[YYYYMMDD].[后缀名]</span></p><p class="text-sm text-gray-600 mt-1">例如：</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li>产品简报澄清：<span class="nas-path">P001_PBC_V1.0_20250620.docx</span></li><li>概念选择纪要：<span class="nas-path">P001_CSN_V1.0_20250625.docx</span></li><li>详细CAD模型（零件）：<span class="nas-path">P001_CAD_Housing_V1.1_20250710.sldprt</span></li><li>PPDP包 (压缩文件)：<span class="nas-path">P001_PPDP_V1.0_20250815.zip</span></li></ul><p class="text-sm text-gray-600 mt-1">官方文档缩写的完整列表将在“术语表与文档链接”标签页中维护。必须遵守此约定，并将进行审计。</p></div><div><h4 class="sub-section-title">3. 工程变更单 (ECO) 流程</h4><p class="text-sm text-gray-600">在设计通过其主要设计阶段的决策门批准后（尤其是核心概念的DG2设计冻结后，或PPDP组件的DG3后），对设计的任何更改都必须遵循正式的ECO流程。这对于变更控制和可追溯性至关重要。</p><p class="text-sm text-gray-600 mt-1">ECO流程步骤：提交请求表 -> 技术与商业影响分析（首席工程师与产品经理）-> ECO评审委员会（产品经理、首席工程师、相关干系人）批准/拒绝 -> 实施与文档更新（若批准）-> 通知所有受影响方。</p><p class="text-sm text-gray-600 mt-1">ECO表格模板可在“术语表与文档链接”标签页中找到。ECO将被追踪并存储在 <span class="nas-path">[项目代码]_[项目名称_下划线连接]\\ECOs\\</span>。</p></div><div><h4 class="sub-section-title">4. 版本控制</h4><p class="text-sm text-gray-600">所有关键设计文档（CAD文件、2D图纸、BOM、规格书）必须进行版本控制。主版本（V1.0, V2.0）表示决策门批准后的发布版本。次版本（V1.1, V1.2）表示阶段内的迭代或ECO批准后的更新。文件名必须反映正确的版本。旧版本应在其文档目录下的名为“_Archive”的子文件夹中存档，不得删除。</p></div><div><h4 class="sub-section-title">5. 文档模板与清单</h4><p class="text-sm text-gray-600">所有关键EPDP文档（PBFR、PPDP组件、测试报告、ECO等）和决策门清单必须强制使用Limi Lighting官方模板。模板链接位于“术语表与文档链接”标签页。完成的清单必须签署并存储在NAS中相应的决策门文件夹内。</p></div></div>`
        },
        special: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_special"></h3><p class="mb-6 text-gray-600">These procedures provide a pragmatic path to bring existing projects ("Legacy Products") into the EPDVP framework and handle common variations like new product variants or accessories. This addresses key confusion points and ensures all development effort, regardless of origin, is subject to appropriate rigor and documentation.</p><div class="space-y-6"><div><h4 class="sub-section-title">1. The "EPDP Fast-Track" for Legacy Products & In-Flight Updates</h4><p class="text-sm text-gray-600">The goal is not to create unnecessary rework but to ensure all active projects have a clear documented status and pass necessary validation before proceeding. The Product Manager, in consultation with the Lead Engineer, will determine the appropriate entry point into the EPDVP.</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li><strong>For Minor Updates to Existing/Approved Products (e.g., small component change not affecting form/fit/function, cost reduction):</strong><ul class="list-circle list-inside ml-6 text-xs"><li>Typically enters at **Phase 3 (Refined Design & Hi-Fi Proto)**, focusing on validating the specific change. An ECO must be raised.</li><li>Requires updating relevant parts of the existing PPDP for that product.</li><li>Must pass a condensed DG3 focusing on the impact of the change.</li></ul></li><li><strong>For Major Rework or Significant Updates to Existing Products (e.g., performance improvement, significant aesthetic change):</strong><ul class="list-circle list-inside ml-6 text-xs"><li>Typically enters at **Phase 2 (Detailed Design & Low-Fi Proto)**.</li><li>A new (or heavily revised) Product Brief Clarification (EPDVP 1.1 output) is required to define the scope of the rework.</li><li>Must pass DG2, DG3, and subsequent gates.</li></ul></li><li><strong>For Legacy Products with Unclear Status or No Formal Documentation:</strong><ul class="list-circle list-inside ml-6 text-xs"><li>Must start at **Phase 1 (Concept & Feasibility)** to establish a clear Product Brief, even if much of the design work is believed to be complete. This forces a baseline understanding and validation.</li><li>The "Preliminary Research" (1.2) and "Conceptual Designs" (1.3) steps may be accelerated by leveraging existing undocumented work, but the outputs must be formally created and stored.</li></ul></li><li><strong>Important Note:</strong> Any project, regardless of entry point, must have all required deliverables for its designated starting phase (and subsequent phases) completed and stored in NAS according to EPDVP standards before it can pass its next Decision Gate.</li></ul></div><div><h4 class="sub-section-title">2. Handling Product Variants & Accessories</h4><p class="text-sm text-gray-600">Development of new product variants (e.g., new color, different size of an existing design family) or closely related accessories often follows an accelerated EPDVP path.</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li><strong>Product Brief Required:</strong> A concise Product Brief (EPDVP 1.1 output) is still mandatory to define the scope, requirements, and justification for the variant/accessory.</li><li><strong>Typical Entry Point:** Often enter at **Phase 2 (Detailed Design & Low-Fi Proto)** or directly into **Phase 3 (Refined Design & Hi-Fi Proto)** if the changes are minimal and leverage a heavily validated parent design. This is determined by PM & LE.</li><li><strong>Decision Gates:</strong> All subsequent Decision Gates (DG2 onwards, or DG3 onwards) must be formally passed.</li><li><strong>Documentation:</strong> Variants/accessories will have their own project code suffix or a clear identifier and will have their PPDPs linked to the parent product's PPDP. CAD and BOMs should clearly distinguish unique parts from common parts.</li></ul></div><div><h4 class="sub-section-title">3. Urgent Projects & "Skipping Steps"</h4><p class="text-sm text-gray-600">The EPDVP is designed to accelerate reliable product development by preventing errors. "Skipping steps" or Decision Gates is **not permitted** as it invariably leads to greater delays and costs later.</p><p class="text-sm text-gray-600 mt-1">For genuinely urgent projects:</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li>The focus must be on **accelerating the completion of deliverables *within* each EPDVP step** through efficient work and resource allocation.</li><li>Parallel processing of some activities *within a phase* may be possible (e.g., starting DFM review while final Lo-Fi prototypes are being assembled), but the inputs for each step must be available.</li><li>Decision Gates remain mandatory checkpoints. High-quality preparation for these gates is key to passing them quickly.</li></ul></div></div>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_special"></h3><p class="mb-6 text-gray-600">这些程序为将现有项目（“旧有产品”）引入EPDP框架，并处理常见的产品变体或配件开发等情况，提供了一条务实的途径。这旨在解决团队的关键困惑点，并确保所有开发工作，无论其来源如何，都经过适当的严谨性和文档化管理。</p><div class="space-y-6"><div><h4 class="sub-section-title">1. 旧有产品与进行中更新的“EPDP快速通道”</h4><p class="text-sm text-gray-600">目标不是制造不必要的重复工作，而是确保所有活跃项目都有清晰的文档化状态，并在继续进行之前通过必要的验证。产品经理将与首席工程师协商，确定进入EPDP的合适切入点。</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li><strong>对现有/已批准产品的次要更新（例如，不影响形状/配合/功能的小组件更改，成本降低）：</strong><ul class="list-circle list-inside ml-6 text-xs"><li>通常在**阶段3（精细设计与高保真原型）**进入，专注于验证特定更改。必须提出ECO。</li><li>需要更新该产品现有PPDP的相关部分。</li><li>必须通过一个简化的、专注于变更影响的DG3。</li></ul></li><li><strong>对现有产品的重大修改或重要更新（例如，性能改进，显著的外观更改）：</strong><ul class="list-circle list-inside ml-6 text-xs"><li>通常在**阶段2（详细设计与低保真原型）**进入。</li><li>需要一份新的（或大幅修订的）产品简报澄清文档（EPDVP 1.1输出）来定义修改范围。</li><li>必须通过DG2、DG3及后续的决策门。</li></ul></li><li><strong>状态不明确或无正式文档的旧有产品：</strong><ul class="list-circle list-inside ml-6 text-xs"><li>必须从**阶段1（概念与可行性）**开始，以建立清晰的产品简报，即使大部分设计工作据信已完成。这强制形成基线理解和验证。</li><li>“初步研究”（1.2）和“概念设计”（1.3）步骤可以通过利用现有的未文档化工作来加速，但必须正式创建并存储其输出。</li></ul></li><li><strong>重要提示：</strong> 任何项目，无论其切入点如何，都必须根据EPDP标准完成其指定起始阶段（及后续阶段）的所有必需交付成果，并存储在NAS中，然后才能通过其下一个决策门。</li></ul></div><div><h4 class="sub-section-title">2. 处理产品变体与配件</h4><p class="text-sm text-gray-600">新产品变体（例如，新颜色，现有设计家族的不同尺寸）或密切相关的配件的开发通常遵循加速的EPDP路径。</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li><strong>需要产品简报：</strong> 仍然强制要求一份简洁的产品简报（EPDVP 1.1输出），以定义变体/配件的范围、要求和理由。</li><li><strong>典型切入点：** 通常在**阶段2（详细设计与低保真原型）**进入，如果更改极小且可利用经过充分验证的父设计，则可能直接进入**阶段3（精细设计与高保真原型）**。这由产品经理和首席工程师确定。</li><li><strong>决策门：</strong> 所有后续的决策门（DG2起，或DG3起）都必须正式通过。</li><li><strong>文档：</strong> 变体/配件将有其自己的项目代码后缀或清晰的标识符，并且其PPDP将链接到父产品的PPDP。CAD和BOM应清晰区分独特零件和通用零件。</li></ul></div><div><h4 class="sub-section-title">3. 紧急项目与“跳过步骤”</h4><p class="text-sm text-gray-600">EPDP旨在通过防止错误来加速可靠的产品开发。“跳过步骤”或决策门是**不允许的**，因为这几乎总是会导致以后出现更大的延误和成本。</p><p class="text-sm text-gray-600 mt-1">对于真正紧急的项目：</p><ul class="list-disc list-inside text-sm mt-2 space-y-1 pl-4"><li>重点必须是通过高效工作和资源分配，**加速完成EPDP每个步骤*内*的交付成果**。</li><li>*阶段内*某些活动的并行处理可能是可行的（例如，在组装最终的低保真原型时开始DFM审查），但每个步骤的输入必须可用。</li><li>决策门仍然是强制性的检查点。为这些决策门进行高质量的准备是快速通过它们的关键。</li></ul></div></div>`
        },
        faqs: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_faqs"></h3><p class="mb-6 text-gray-600">This section addresses common questions and points of confusion to help clarify the EPDP's practical application, based on common queries and past project experiences.</p><div class="space-y-4"><details class="info-accordion"><summary>Q: My project is an update to an existing product. Do I have to start EPDVP from Phase 1?</summary><div class="details-content"><p><strong>A: Not necessarily.</strong> Refer to the "EPDP Fast-Track for Legacy Products" in the 'Special Cases' tab. The entry point (Phase 1, 2, or 3) depends on the significance of the update and the quality of existing documentation. The PM and LE will decide this. However, all subsequent phases and gates from the entry point are mandatory.</p></div></details><details class="info-accordion"><summary>Q: Why can't Purchasing get initial quotes during Phase 2 (Detailed Design) to save time?</summary><div class="details-content"><p><strong>A: This is strictly to prevent wasted effort based on unvalidated designs.</strong> Historically, premature quoting led to incorrect pricing, sourcing wrong parts, and significant delays when designs changed after Lo-Fi or Hi-Fi prototyping. The PPDP from DG3 provides Purchasing with a *validated, frozen design* – this is the "sacred contract." Initial cost estimations are part of Phase 1 (PBFR), and DFM in Phase 2, but formal supplier RFQs for production parts only begin in Phase 4 with an approved PPDP.</p></div></details><details class="info-accordion"><summary>Q: Can we skip a Decision Gate or combine them if a project is very urgent?</summary><div class="details-content"><p><strong>A: No. Decision Gates are mandatory Go/No-Go checkpoints.</strong> They ensure quality, alignment, and prevent flawed projects from consuming further resources. For urgent projects, the focus is on preparing high-quality deliverables to pass each gate efficiently and quickly, not on bypassing the gate itself. The Admin Lead should ensure gate meetings are scheduled promptly once deliverables are ready.</p></div></details><details class="info-accordion"><summary>Q: What if a "minor" change identified late in Phase 3 (e.g., during DFM review) has a small impact on form/fit/function?</summary><div class="details-content"><p><strong>A: All changes affecting form, fit, or function, even if seemingly minor, require careful consideration.</strong> If identified in Phase 3, it should be documented via an ECO. The impact must be assessed. If it truly is minor and approved by PM & LE, the PPDP is updated. If the impact is significant, it may require re-looping to an earlier part of Phase 3 or even Phase 2 for re-validation. This prevents "creeping featuritis" or unvalidated changes from undermining the PPDP.</p></div></details><details class="info-accordion"><summary>Q: Who is ultimately responsible for ensuring files are correctly named and stored in NAS?</summary><div class="details-content"><p><strong>A: The individual "Responsible" (R) for creating a specific deliverable (e.g., DE for CAD, LE for a plan, PM for a brief) is responsible for ensuring it is correctly named and stored in the designated NAS location as per EPDVP standards.</strong> The Lead Engineer (Mark) has oversight for their team's deliverables. The Admin Lead (Cherry/Karen) is responsible for *auditing* compliance and supporting the team with process questions, but not for doing the filing for them.</p></div></details><details class="info-accordion"><summary>Q: How detailed do the initial notes for EPDVP Sec 1.1 (Product Brief Clarification) need to be for an existing product we are just updating?</summary><div class="details-content"><p><strong>A: Sufficiently detailed to clearly state: 1. What specific existing product/version is being updated. 2. WHY the update is being initiated (e.g., customer feedback, cost reduction, component obsolescence, performance improvement). 3. WHAT specific changes are intended or problems are to be solved. 4. Any known constraints or targets for the update.</strong> Even for a small update, documenting this shared understanding upfront prevents scope creep and ensures everyone is aligned on the objective before work begins. It can be brief but must cover these points.</p></div></details></div>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_faqs"></h3><p class="mb-6 text-gray-600">本节旨在解答常见问题和困惑点，以帮助阐明EPDP在实际应用中的具体操作，这些问题基于常见的疑问和过去的项目经验。</p><div class="space-y-4"><details class="info-accordion"><summary>问：我的项目是对现有产品的更新。我必须从EPDP的阶段1重新开始吗？</summary><div class="details-content"><p><strong>答：不一定。</strong> 请参考“特殊情况处理”标签页中的“旧有产品的EPDP快速通道”。切入点（阶段1、2或3）取决于更新的重要性以及现有文档的质量。这将由产品经理和首席工程师决定。但是，从切入点开始的所有后续阶段和决策门都是强制性的。</p></div></details><details class="info-accordion"><summary>问：为什么采购部不能在阶段2（详细设计）期间获取初步报价以节省时间？</summary><div class="details-content"><p><strong>答：这是为了严格防止基于未经验证的设计而浪费精力。</strong> 历史上，过早报价导致了不正确的定价、采购错误零件以及在低保真或高保真原型制作后设计更改时造成重大延误。来自DG3的PPDP为采购部提供了*经过验证的、已冻结的设计*——这是“神圣的契约”。初步的成本估算属于阶段1（PBFR）的一部分，DFM分析在阶段2进行，但针对生产零件的正式供应商询价仅在阶段4凭已批准的PPDP开始。</p></div></details><details class="info-accordion"><summary>问：如果项目非常紧急，我们可以跳过某个决策门或合并它们吗？</summary><div class="details-content"><p><strong>答：不可以。决策门是强制性的“通过/不通过”检查点。</strong> 它们确保质量、一致性，并防止有缺陷的项目继续推进并消耗更多资源。对于紧急项目，重点应放在高效准备高质量的交付成果以快速通过每个决策门，而不是绕过决策门本身。行政主管应确保一旦交付成果准备就绪，决策门会议能及时安排。</p></div></details><details class="info-accordion"><summary>问：如果在阶段3后期（例如DFM评审期间）发现一个“微小”变更对形状/配合/功能有轻微影响怎么办？</summary><div class="details-content"><p><strong>答：所有影响形状、配合或功能的变更，即使看起来微不足道，也需要仔细考虑。</strong> 如果在阶段3发现，应通过ECO记录。必须评估其影响。如果确实影响轻微并得到产品经理和首席工程师的批准，则更新PPDP。如果影响重大，则可能需要重新回到阶段3的早期部分甚至阶段2进行重新验证。这可以防止“功能蔓延”或未经验证的更改破坏PPDP的完整性。</p></div></details><details class="info-accordion"><summary>问：最终由谁负责确保文件正确命名并存储在NAS中？</summary><div class="details-content"><p><strong>答：负责（R）创建特定交付成果的个人（例如，设计工程师负责CAD，首席工程师负责计划，产品经理负责简报）负责确保其按照EPDP标准正确命名并存储在指定的NAS位置。</strong> 首席工程师（Mark）对其团队的交付成果进行监督。行政主管（Cherry/Karen）负责*审计*合规性并为团队提供流程问题支持，但不负责替他们归档文件。</p></div></details><details class="info-accordion"><summary>问：对于我们只是更新的现有产品，EPDP第1.1节（产品简报澄清）的初始笔记需要多详细？</summary><div class="details-content"><p><strong>答：需足够详细以清楚说明：1. 正在更新哪个具体的现有产品/版本。2. 为什么启动此更新（例如，客户反馈、成本降低、组件停产、性能改进）。3. 打算进行哪些具体更改或解决哪些问题。4. 关于此更新的任何已知约束或目标。</strong> 即使是很小的更新，预先记录这种共同理解也能防止范围蔓延，并确保在工作开始前每个人都对目标达成一致。它可以简明扼要，但必须涵盖这些要点。</p></div></details></div>`
        },
        glossary: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_glossary"></h3><p class="mb-6 text-gray-600">Standardized terminology, document abbreviations, and links to essential templates and guides are crucial for clear communication and efficient execution of the EPDP. These are the single source of truth.</p><div class="grid md:grid-cols-2 gap-x-8 gap-y-6"><div><h4 class="sub-section-title">Key Terms & Abbreviations</h4><dl class="text-sm space-y-2 mt-2"><dt class="font-semibold">EPDP</dt><dd class="ml-4">Engineering Prototyping & Design Validation Procedure</dd><dt class="font-semibold">PBFR</dt><dd class="ml-4">Product Brief & Feasibility Report (Output of Phase 1, Input to DG1)</dd><dt class="font-semibold">CAD</dt><dd class="ml-4">Computer-Aided Design (e.g., SolidWorks, AutoCAD files)</dd><dt class="font-semibold">BOM</dt><dd class="ml-4">Bill of Materials</dd><dt class="font-semibold">DFM</dt><dd class="ml-4">Design for Manufacturability</dd><dt class="font-semibold">DFA</dt><dd class="ml-4">Design for Assembly</dd><dt class="font-semibold">Lo-Fi</dt><dd class="ml-4">Low-Fidelity (referring to early-stage, conceptual prototypes)</dd><dt class="font-semibold">Hi-Fi</dt><dd class="ml-4">High-Fidelity (referring to later-stage, functional, near-production prototypes)</dd><dt class="font-semibold">PPDP</dt><dd class="ml-4">Pre-Production Design Package (Key output of Phase 3, Input to DG3 & Purchasing)</dd><dt class="font-semibold">DG</dt><dd class="ml-4">Decision Gate (DG1, DG2, DG3, DG4, DG5)</dd><dt class="font-semibold">RFQ</dt><dd class="ml-4">Request for Quotation</dd><dt class="font-semibold">PO</dt><dd class="ml-4">Purchase Order</dd><dt class="font-semibold">FAI</dt><dd class="ml-4">First Article Inspection</dd><dt class="font-semibold">ITP</dt><dd class="ml-4">Inspection and Test Plan</dd><dt class="font-semibold">SOP</dt><dd class="ml-4">Standard Operating Procedure</dd><dt class="font-semibold">QC</dt><dd class="ml-4">Quality Control</dd><dt class="font-semibold">IQC</dt><dd class="ml-4">Incoming Quality Control</dd><dt class="font-semibold">IPQC</dt><dd class="ml-4">In-Process Quality Control</dd><dt class="font-semibold">FQA</dt><dd class="ml-4">Final Quality Assurance</dd><dt class="font-semibold">CTQ</dt><dd class="ml-4">Critical-to-Quality (features)</dd><dt class="font-semibold">ECO</dt><dd class="ml-4">Engineering Change Order</dd><dt class="font-semibold">ECR</dt><dd class="ml-4">Engineering Change Request</dd><dt class="font-semibold">NAS</dt><dd class="ml-4">Network Attached Storage (our central file server)</dd><dt class="font-semibold">PM</dt><dd class="ml-4">Product Manager (Umer)</dd><dt class="font-semibold">LE</dt><dd class="ml-4">Lead Engineer (Mark)</dd><dt class="font-semibold">DE</dt><dd class="ml-4">Design Engineer(s)</dd></dl></div><div><h4 class="sub-section-title">Document Templates & Official Guides</h4><p class="text-sm text-gray-600 mt-2 mb-1">All official templates are stored in <span class="nas-path">\\\\Limi_NAS\\Company_Docs\\EPDP_Templates\\</span>. It is mandatory to use the latest versions from this location.</p><ul class="list-disc list-inside text-sm space-y-1"><li>EPDP V2.0 Full Procedure Document (This Interactive Guide & Source PDF)</li><li>Product Brief & Feasibility Report (PBFR) Template (<span class="nas-path">Limi_PBFR_Template_V1.x.docx</span>)</li><li>Pre-Production Design Package (PPDP) Content Checklist (<span class="nas-path">Limi_PPDP_Checklist_V1.x.xlsx</span>)</li><li>Engineering Change Order (ECO) Form Template (<span class="nas-path">Limi_ECO_Form_V1.x.docx</span>)</li><li>Decision Gate Checklists (DG1-DG5) Templates (Individual files, e.g., <span class="nas-path">Limi_DG1_Checklist_V1.x.docx</span>)</li><li>DFM/DFA Review Report Template</li><li>Functional Test Report Template</li><li>Sample Inspection and Test Plan (ITP) Template</li><li>Non-Conformance Report (NCR) Template</li><li>Corrective Action Request (CAR) Template</li><li>Assembly SOP Template</li><li>QC Checklist Template (IPQC/FQA)</li></ul><h4 class="sub-section-title mt-4">External Links & Resources</h4><ul class="list-disc list-inside text-sm space-y-1"><li><a href="#" class="text-teal-600 hover:underline">Link to Trello Boards (Project Tracking)</a> (Update with actual link)</li><li><a href="#" class="text-teal-600 hover:underline">Link to NAS Project Root (\\\\Limi_NAS\\Projects\\)</a> (Update with actual link if possible as a clickable file explorer link, though this is OS dependent)</li></ul></div></div>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_glossary"></h3><p class="mb-6 text-gray-600">标准化的术语、文档缩写以及指向基本模板和指南的链接，对于EPDP的清晰沟通和高效执行至关重要。这些是唯一的信息来源。</p><div class="grid md:grid-cols-2 gap-x-8 gap-y-6"><div><h4 class="sub-section-title">关键术语与缩写</h4><dl class="text-sm space-y-2 mt-2"><dt class="font-semibold">EPDP</dt><dd class="ml-4">工程原型与设计验证流程</dd><dt class="font-semibold">PBFR</dt><dd class="ml-4">产品简报与可行性报告 (阶段1输出, DG1输入)</dd><dt class="font-semibold">CAD</dt><dd class="ml-4">计算机辅助设计 (例如 SolidWorks, AutoCAD 文件)</dd><dt class="font-semibold">BOM</dt><dd class="ml-4">物料清单</dd><dt class="font-semibold">DFM</dt><dd class="ml-4">可制造性设计</dd><dt class="font-semibold">DFA</dt><dd class="ml-4">可装配性设计</dd><dt class="font-semibold">Lo-Fi</dt><dd class="ml-4">低保真 (指早期概念性原型)</dd><dt class="font-semibold">Hi-Fi</dt><dd class="ml-4">高保真 (指后期功能性、接近最终生产的原型)</dd><dt class="font-semibold">PPDP</dt><dd class="ml-4">预生产设计包 (阶段3关键输出, DG3及采购输入)</dd><dt class="font-semibold">DG</dt><dd class="ml-4">决策门 (DG1, DG2, DG3, DG4, DG5)</dd><dt class="font-semibold">RFQ</dt><dd class="ml-4">询价请求</dd><dt class="font-semibold">PO</dt><dd class="ml-4">采购订单</dd><dt class="font-semibold">FAI</dt><dd class="ml-4">首件检验</dd><dt class="font-semibold">ITP</dt><dd class="ml-4">检验与测试计划</dd><dt class="font-semibold">SOP</dt><dd class="ml-4">标准作业程序</dd><dt class="font-semibold">QC</dt><dd class="ml-4">质量控制</dd><dt class="font-semibold">IQC</dt><dd class="ml-4">来料质量控制</dd><dt class="font-semibold">IPQC</dt><dd class="ml-4">制程中质量控制</dd><dt class="font-semibold">FQA</dt><dd class="ml-4">最终质量保证</dd><dt class="font-semibold">CTQ</dt><dd class="ml-4">关键质量特性</dd><dt class="font-semibold">ECO</dt><dd class="ml-4">工程变更单</dd><dt class="font-semibold">ECR</dt><dd class="ml-4">工程变更请求</dd><dt class="font-semibold">NAS</dt><dd class="ml-4">网络附加存储 (我们的中央文件服务器)</dd><dt class="font-semibold">PM</dt><dd class="ml-4">产品经理 (Umer)</dd><dt class="font-semibold">LE</dt><dd class="ml-4">首席工程师 (Mark)</dd><dt class="font-semibold">DE</dt><dd class="ml-4">设计工程师</dd></dl></div><div><h4 class="sub-section-title">文档模板与官方指南</h4><p class="text-sm text-gray-600 mt-2 mb-1">所有官方模板均存储在 <span class="nas-path">\\\\Limi_NAS\\Company_Docs\\EPDP_Templates\\</span>。必须使用此位置的最新版本。</p><ul class="list-disc list-inside text-sm space-y-1"><li>EPDP V2.0 完整流程文档 (本交互指南及其源PDF文件)</li><li>产品简报与可行性报告 (PBFR) 模板 (<span class="nas-path">Limi_PBFR_Template_V1.x.docx</span>)</li><li>预生产设计包 (PPDP) 内容清单 (<span class="nas-path">Limi_PPDP_Checklist_V1.x.xlsx</span>)</li><li>工程变更单 (ECO) 表格模板 (<span class="nas-path">Limi_ECO_Form_V1.x.docx</span>)</li><li>决策门清单 (DG1-DG5) 模板 (独立文件, 例如 <span class="nas-path">Limi_DG1_Checklist_V1.x.docx</span>)</li><li>DFM/DFA 评审报告模板</li><li>功能测试报告模板</li><li>样品检验与测试计划 (ITP) 模板</li><li>不合格报告 (NCR) 模板</li><li>纠正措施请求 (CAR) 模板</li><li>装配SOP模板</li><li>QC检验表模板 (IPQC/FQA)</li></ul><h4 class="sub-section-title mt-4">外部链接与资源</h4><ul class="list-disc list-inside text-sm space-y-1"><li><a href="#" class="text-teal-600 hover:underline">Trello看板链接 (项目追踪)</a> (请更新为实际链接)</li><li><a href="#" class="text-teal-600 hover:underline">NAS项目根目录链接 (\\\\Limi_NAS\\Projects\\)</a> (如可能，请更新为可点击的文件浏览器链接，但这取决于操作系统)</li></ul></div></div>`
        },
        chart: {
            en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_chart"></h3><p class="mb-6 text-gray-600">This chart provides a conceptual visualization of the relative effort and resource allocation typically expected across the development phases. The early phases (Concept, Design, Validation) involve intense design, prototyping, and validation work, while later phases (Sourcing, Production, Improvement) transition towards management, oversight, and iterative refinement based on real-world data.</p><div class="chart-container bg-white p-4 rounded-lg shadow"><canvas id="effortChart"></canvas></div><p class="mt-4 text-xs text-gray-500">Note: Effort percentages are illustrative and may vary significantly based on project complexity, novelty, and available resources. This chart is intended to give a general sense of workflow intensity.</p>`,
            cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_chart"></h3><p class="mb-6 text-gray-600">此图表概念性地展示了在产品开发各阶段通常预期的相对投入和资源分配。早期阶段（概念、设计、验证）涉及紧张的设计、原型制作和验证工作，而后期阶段（采购、生产、改进）则过渡到管理、监督以及基于实际数据的迭代优化。</p><div class="chart-container bg-white p-4 rounded-lg shadow"><canvas id="effortChart"></canvas></div><p class="mt-4 text-xs text-gray-500">注意：投入百分比仅为示意性，并可能因项目复杂度、新颖性及可用资源而有显著差异。此图表旨在提供工作流程强度的大致概念。</p>`
        }
    }; 
    
    document.addEventListener('DOMContentLoaded', function () {
        let currentLanguage = 'en';
        const initialPhase = 'phase-1'; 
       let currentPhase = initialPhase;
       let currentTab = 'roles';
       let currentRole = 'DEFAULT';
       let effortChartInstance = null;
        let progressState = JSON.parse(localStorage.getItem('epdpProgress') || '{}');
        
        const langToggle = document.getElementById('language-toggle');
        const roleSelector = document.getElementById('role-selector');
        const detailView = document.getElementById('detail-view');
        const processFlowContainer = document.querySelector('#process-flow .flex');
        const tabContainer = document.getElementById('tab-navigation');
        const tabContent = document.getElementById('tab-content');
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modal = document.getElementById('modal');
        const modalContentElement = document.getElementById('modal-content'); // Renamed to avoid conflict
        const modalCloseButton = document.getElementById('modal-close-button');
        const generateFolderBtn = document.getElementById('generate-folder-btn');
        const folderOutput = document.getElementById('folder-output');
        const folderTypeSelector = document.getElementById('folder-type-selector');
        const searchInput = document.getElementById('search-input');

        function renderAll() {
            renderPhaseCards(); 
            renderTabs();
            renderPhaseDetails(currentPhase); 
            renderTabContent(currentTab);   
            applyRoleFilter(currentRole); 
        }

        function translatePage(lang) {
            currentLanguage = lang; 
            document.querySelectorAll('[data-lang]').forEach(el => {
                const key = el.dataset.lang;
                if (translations[lang][key]) el.textContent = translations[lang][key];
            });
            document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
                const key = el.dataset.langPlaceholder;
                if (translations[lang][key]) el.placeholder = translations[lang][key];
            });
            populateRoleSelector(); 
            renderPhaseCards(); 
            if (document.getElementById(currentPhase)) renderPhaseDetails(currentPhase); 
            if (document.querySelector('.tab-button.active')) renderTabContent(currentTab); 
             if (currentTab === 'chart') renderEffortChart(); 
        }
        
        function phaseKey(id) {
            return id.replace('-', '_');
        }

        function renderPhaseCards() {
            const phaseIcons = {
                'phase-1': '💡',
                'phase-2': '📐',
                'phase-3': '🛠️',
                'phase-4': '🤝',
                'phase-5': '🏭',
                'phase-6': '🚀',
                'phase-7': '📈'
            };
            let html = '';
            phaseOrder.forEach((phaseId, index) => {
                if (fullPhaseData[phaseId] && fullPhaseData[phaseId][currentLanguage]) {
                    const key = phaseKey(phaseId);
                    const phaseDisplayName = translations[currentLanguage][`${key}_name`] || phaseId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                    const phaseDisplayTag = translations[currentLanguage][`${key}_tag`] || '';
                    const phaseTitleText = `${translations[currentLanguage].lifecycle_phase || 'Phase'} ${index + 1}: ${phaseDisplayName}`;
                    html += `
                        <div id="${phaseId}" class="phase-card cursor-pointer p-4 rounded-lg shadow-md min-w-[180px] md:min-w-[200px] text-center flex-shrink-0" title="${phaseDisplayTag}">
                            <div class="text-teal-600 font-bold">${phaseIcons[phaseId] || ''} ${translations[currentLanguage].lifecycle_phase || 'Phase'} ${index + 1}</div>
                            <div class="font-semibold text-gray-800 text-sm" data-lang="${key}_name">${phaseDisplayName}</div>
                            <div class="text-xs text-gray-500 mt-1" data-lang="${key}_tag">${phaseDisplayTag}</div>
                        </div>
                    `;
                    const gateData = fullPhaseData[phaseId][currentLanguage].gate;
                    if (index < phaseOrder.length - 1 && gateData) {
                         const gateNameText = gateData.name || `Decision Gate ${index + 1}`;
                         const gatePurpose = gateData.purpose || '';
                         const checklistRef = gateData.checklist_ref || '';
                         const gateClasses = index === 1 ? 'gate pm-gate' : 'gate';
                         html += `<div class="flex items-center justify-center text-gray-500 mx-1 md:mx-2"><div class="w-6 h-px bg-gray-300"></div><div class="${gateClasses} bg-slate-200 flex items-center justify-center text-xs font-bold" data-checklist-ref="${checklistRef}" data-gate-name="${gateNameText}" data-gate-purpose="${gatePurpose}" title="${gateNameText}"><span class="gate-text">DG${index + 1}</span></div><div class="w-6 h-px bg-gray-300"></div></div>`;
                    } else if (index < phaseOrder.length - 1) {
                         html += `<div class="flex items-center justify-center text-gray-500 mx-1 md:mx-2"><div class="w-full h-px bg-gray-300 max-w-[24px]"></div></div>`;
                    }
                }
            });
            processFlowContainer.innerHTML = html;
            addPhaseCardListeners();
            addGateListeners();
            setActivePhase(currentPhase);
        }

        function renderTabs() {
            const tabOrder = ['roles', 'governance', 'special', 'faqs', 'glossary', 'chart'];
            let html = '';
            tabOrder.forEach(tabId => {
                const tabName = translations[currentLanguage][`tab_${tabId}`] || tabId.charAt(0).toUpperCase() + tabId.slice(1);
                html += `<button data-tab="${tabId}" data-lang="tab_${tabId}" class="tab-button whitespace-nowrap py-4 px-3 md:px-4 border-b-2 font-medium text-sm">${tabName}</button>`;
            });
            tabContainer.innerHTML = html;
            addTabListeners();
            setActiveTab(currentTab);
        }
        
        function renderPhaseDetails(phaseId) {
            const phaseContent = fullPhaseData[phaseId]?.[currentLanguage];
            if (!phaseContent) {
                detailView.innerHTML = `<p class="text-gray-500">${translations[currentLanguage].select_phase_prompt || 'Select a phase above to see details.'}</p>`;
                return;
            }

            const createAccordionItems = (items, sectionIdx) => {
                if (!items || !Array.isArray(items)) return '';
                return items.map((item, idx) => {
                    if (typeof item === 'string') return `<li class="text-gray-700">${item}</li>`;
                    const detailsContent = item.details.includes('<span class="nas-path">') ? item.details : `<p class="text-gray-700">${item.details}</p>`;
                    const roleAttribute = item.primaryRole ? `data-role="${item.primaryRole.toUpperCase()}"` : '';
                    const taskId = `${phaseId}-${sectionIdx}-${idx}`;
                    const checked = progressState[taskId] ? 'checked' : '';
                    return `
                    <details class="info-accordion" ${roleAttribute} data-task-id="${taskId}">
                        <summary class="text-gray-800 hover:text-teal-700"><input type="checkbox" class="task-checkbox" ${checked}>${item.summary}</summary>
                        <div class="details-content">
                            ${detailsContent}
                        </div>
                    </details>
                    `;
                }).join('');
            };
            
            const createSectionHtml = (section, secIdx) => {
                let sectionTitle = translations[currentLanguage][section.title_key] || section.title_key.replace('section_', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                let itemsHtml = '';
                if (section.type === 'output') {
                    itemsHtml = `<ul class="list-disc list-inside text-gray-700 space-y-1">${section.items.map(o => `<li>${o}</li>`).join('')}</ul>`;
                } else {
                    itemsHtml = `<div class="space-y-2">${createAccordionItems(section.items, secIdx)}</div>`;
                }
                return `<div class="mb-4"><h4 class="sub-section-title">${sectionTitle}</h4>${itemsHtml}</div>`;
            };

            let sectionsHtml = phaseContent.sections.map((s,i) => createSectionHtml(s,i)).join('');
            let gateHtml = '';
            if (phaseContent.gate) {
                const phaseIndex = parseInt(phaseId.split('-')[1]);
                let backButtonHtml = '';
                let nextButtonHtml = '';
                if (phaseIndex > 1) {
                    const prevPhaseId = `phase-${phaseIndex - 1}`;
                    if (fullPhaseData[prevPhaseId]) {
                        backButtonHtml = `<button data-target-phase="${prevPhaseId}" class="go-back-btn text-sm bg-slate-500 text-white py-1 px-3 rounded-md hover:bg-slate-600 transition-colors ml-4" data-lang="go_back_btn">${translations[currentLanguage].go_back_btn}</button>`;
                    }
                }
                if (phaseIndex < phaseOrder.length) {
                    const nextPhaseId = `phase-${phaseIndex + 1}`;
                    if (fullPhaseData[nextPhaseId]) {
                        nextButtonHtml = `<button data-target-phase="${nextPhaseId}" class="next-phase-btn text-sm bg-teal-500 text-white py-1 px-3 rounded-md hover:bg-teal-600 transition-colors ml-4" data-lang="next_phase_btn">${translations[currentLanguage].next_phase_btn}</button>`;
                    }
                }
                const gateNameText = phaseContent.gate.name || `${translations[currentLanguage].view_checklist} for DG${phaseIndex}`;
                const gatePurposeText = phaseContent.gate.purpose || "";
                gateHtml = `
                    <div class="mt-6 border-t-2 border-teal-600 pt-4">
                        <h4 class="font-semibold text-xl flex items-center text-teal-700"><span class="mr-2 text-2xl">&#128737;</span>${gateNameText}</h4>
                        <p class="text-sm text-gray-600 mt-1 mb-3">${gatePurposeText}</p>
                        <button data-checklist-ref="${phaseContent.gate.checklist_ref}" class="view-checklist-btn text-sm bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors" data-lang="view_checklist">${translations[currentLanguage].view_checklist}</button>
                        ${backButtonHtml}
                        ${nextButtonHtml}
                    </div>`;
            }
            
            detailView.innerHTML = `
                <div class="mb-6 pb-4 border-b">
                    <h3 class="text-2xl font-bold text-slate-800">${phaseContent.title}</h3>
                    <p class="text-md text-teal-700 font-medium">${phaseContent.subtitle}</p>
                    <p class="mt-2 text-sm text-gray-600">${phaseContent.objective}</p>
                </div>
                <div class="progress-wrapper">
                    <div class="progress-bar-bg"><div id="progress-bar" class="progress-bar-fill" style="width:0%"></div></div>
                    <p id="progress-text" class="text-xs text-gray-500 mt-1"></p>
                </div>
                <div class="mb-4 text-right"><button id="export-pdf-btn" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">Export PDF</button></div>
                ${sectionsHtml}
                ${gateHtml}
            `;
            
           detailView.querySelectorAll('.view-checklist-btn').forEach(button => {
               button.addEventListener('click', (e) => showModal(e.target.dataset.checklistRef, phaseContent.gate.name, phaseContent.gate.purpose));
           });
           detailView.querySelectorAll('.go-back-btn').forEach(button => {
               button.addEventListener('click', (e) => {
                   const targetPhase = e.target.dataset.targetPhase;
                   setActivePhase(targetPhase);
                   renderAll();
               });
           });
           detailView.querySelectorAll('.next-phase-btn').forEach(button => {
               button.addEventListener('click', (e) => {
                   const targetPhase = e.target.dataset.targetPhase;
                   setActivePhase(targetPhase);
                   renderAll();
               });
           });
            detailView.querySelectorAll('.task-checkbox').forEach(cb => {
                cb.addEventListener('click', e => e.stopPropagation());
                cb.addEventListener('change', e => {
                    const taskId = e.target.closest('details').dataset.taskId;
                    progressState[taskId] = e.target.checked;
                    saveProgress();
                    updateProgressBar();
                });
            });
            const exportBtn = document.getElementById('export-pdf-btn');
            if(exportBtn) exportBtn.addEventListener('click', () => window.print());
            addTemplateListeners();
            updateProgressBar();
            applyRoleFilter(currentRole);
        }
        
        function renderTabContent(tabId) {
            const tabData = fullTabContentData[tabId]?.[currentLanguage];
            if (tabData) {
                tabContent.innerHTML = tabData;
            } else {
                 tabContent.innerHTML = `<p>Content for '${tabId}' (lang: ${currentLanguage}) not yet defined in fullTabContentData.</p>`;
            }

            if (tabId === 'roles') {
                buildRaciTable();
                addRoleCardListeners();
                const currentSelectedRole = roleSelector.value;
                applyRoleFilter(currentSelectedRole); 
            }
            if (tabId === 'chart') {
                renderEffortChart();
            }
           if(tabId !== 'roles') { 
                applyRoleFilter(currentRole); 
            }
            translatePage(currentLanguage); // Critical: translate static text within the newly injected HTML for tabs
        }

        function buildRaciTable() {
            const tableBody = document.querySelector('#raci-table tbody');
            if (!tableBody) return;

            let currentPhaseGroup = null;
            let rowsHtml = '';
            const roleKeys = ['PM', 'LE', 'DE', 'PURCHASING', 'PRODUCTION', 'QC', 'ADMIN'];

            raciData.forEach(item => {
                const activityText = item[`activity_${currentLanguage}`] || item.activity_en;
                const phaseMatch = activityText.match(/\(([\w\d\.]+)\)$/); 
                let itemPhaseGroup = "General Activities"; 

                if (phaseMatch) {
                    const ref = phaseMatch[1];
                    if (ref.toUpperCase().startsWith("DG")) { // Make DG check case-insensitive
                        itemPhaseGroup = `${translations[currentLanguage].view_checklist.split(' ')[0]} ${ref.substring(2)}`; // "Decision Gate X"
                    } else if (ref.includes(".")) {
                         itemPhaseGroup = `${translations[currentLanguage].lifecycle_phase || 'Phase'} ${ref.split('.')[0]}`;
                    } else {
                        const epdvpSecMatch = activityText.match(/\(EPDVP Sec (\d)\.\d+\)/i) || activityText.match(/\(Sec (\d)\.\d+\)/i) || activityText.match(/EPDVP (\d\.\d+)/i);
                        if (epdvpSecMatch && epdvpSecMatch[1]) {
                            itemPhaseGroup = `${translations[currentLanguage].lifecycle_phase || 'Phase'} ${epdvpSecMatch[1]}`;
                        }
                    }
                }
                
                if (itemPhaseGroup !== currentPhaseGroup) {
                    currentPhaseGroup = itemPhaseGroup;
                    rowsHtml += `<tr class="bg-slate-100 sticky left-0 top-0 z-10 shadow-sm"><td colspan="${roleKeys.length + 1}" class="px-3 py-1.5 font-semibold text-slate-700">${currentPhaseGroup}</td></tr>`;
                }
                
                let cellsHtml = '';
                roleKeys.forEach(roleKey => {
                    cellsHtml += `<td class="border-t text-center py-2 px-1" data-role-val="${roleKey}">${item[roleKey] || ''}</td>`;
                });

                rowsHtml += `
                    <tr data-roles='${JSON.stringify(item).replace(/'/g, "&apos;")}'>
                        <td class="border-t px-3 py-2 sticky left-0 bg-white z-10">${activityText}</td>
                        ${cellsHtml}
                    </tr>
                `;
            });
            tableBody.innerHTML = rowsHtml;
        }
        
        function handleLanguageChange() {
            currentLanguage = langToggle.checked ? 'cn' : 'en';
            translatePage(currentLanguage); 
        }

        function handleRoleChange(roleValue) {
            currentRole = roleValue; 
            document.querySelectorAll('#role-card-container .role-card').forEach(c => {
                c.classList.toggle('active', c.dataset.role === currentRole);
            });
            roleSelector.value = currentRole;
            applyRoleFilter(currentRole);
        }

        function applyRoleFilter(roleToFilter) {
            const isDefaultView = roleToFilter === 'DEFAULT';
            
            detailView.querySelectorAll('details.info-accordion').forEach(detail => {
                const primaryRole = detail.dataset.role; 
                if (isDefaultView || !primaryRole || primaryRole === "" || primaryRole === roleToFilter) {
                    detail.style.display = '';
                } else {
                    detail.style.display = 'none';
                }
            });
        
            const raciTable = document.getElementById('raci-table');
            if (raciTable && currentTab === 'roles') {
                raciTable.querySelectorAll('thead th').forEach(th => th.style.backgroundColor = '');
                raciTable.querySelectorAll('tbody td').forEach(td => {
                    td.style.backgroundColor = '';
                    td.style.fontWeight = 'normal';
                    td.style.color = 'inherit';
                    td.classList.remove('raci-table-role-cell-highlight');
                });
                raciTable.querySelectorAll('tbody tr').forEach(tr => {
                    tr.style.opacity = isDefaultView ? '1' : '0.3'; 
                    tr.classList.remove('role-row-highlight');
                });
        
                if (!isDefaultView) {
                    const roleKeyForTable = roleToFilter; 
                    const columnIndex = Array.from(raciTable.querySelectorAll('thead th')).findIndex(th => {
                        const langKey = th.dataset.lang; 
                        return langKey && langKey.substring(5).toUpperCase() === roleKeyForTable;
                    });
        
                    if (columnIndex !== -1) {
                        const headCell = raciTable.querySelector(`thead th:nth-child(${columnIndex + 1})`);
                        if (headCell) headCell.style.backgroundColor = '#d1fae5';
        
                        raciTable.querySelectorAll('tbody tr').forEach(row => {
                            const rolesInRowText = row.dataset.roles;
                            if (rolesInRowText) {
                                try {
                                    const rolesInRow = JSON.parse(rolesInRowText.replace(/&apos;/g, "'"));
                                    if (rolesInRow[roleKeyForTable]) {
                                        row.style.opacity = '1';
                                        row.classList.add('role-row-highlight');
                                        const cell = row.children[columnIndex];
                                        if (cell) {
                                            cell.classList.add('raci-table-role-cell-highlight');
                                            if (rolesInRow[roleKeyForTable] === 'A' || rolesInRow[roleKeyForTable] === 'R') {
                                                cell.style.fontWeight = 'bold';
                                                cell.style.color = '#047857';
                                            }
                                        }
                                    }
                                } catch (e) {
                                    console.error("Error parsing data-roles JSON:", e, "on row:", row.firstChild.textContent);
                                }
                            }
                        });
                    }
                }
            }
        }
        

        function setActivePhase(phaseId) {
            if (!fullPhaseData[phaseId]) { 
                console.warn(`Phase ID "${phaseId}" not found in fullPhaseData. Defaulting to initialPhase.`);
                phaseId = initialPhase;
            }
            currentPhase = phaseId;
            document.querySelectorAll('.phase-card').forEach(card => {
                card.classList.toggle('active', card.id === currentPhase);
            });
            populateFolderSelector();
        }
        
        function setActiveTab(tabId) {
            if (!fullTabContentData[tabId]) { 
                 console.warn(`Tab ID "${tabId}" not found. Defaulting to 'roles'.`);
                tabId = 'roles';
            }
            currentTab = tabId;
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.toggle('active', button.dataset.tab === currentTab);
            });
        }
        
        function addPhaseCardListeners() {
             document.querySelectorAll('.phase-card').forEach(card => {
                card.addEventListener('click', () => {
                    const phaseId = card.id;
                    setActivePhase(phaseId);
                    renderPhaseDetails(phaseId);
                });
            });
        }

        function addGateListeners() {
             document.querySelectorAll('.gate[data-checklist-ref]').forEach(gate => {
                gate.addEventListener('click', () => {
                    const ref = gate.dataset.checklistRef;
                    const name = gate.dataset.gateName;
                    const purpose = gate.dataset.gatePurpose;
                    showModal(ref, name, purpose);
                });
            });
        }

        function addTabListeners() {
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.dataset.tab;
                    setActiveTab(tabId);
                    renderTabContent(tabId);
                });
            });
        }
        
        function addRoleCardListeners() {
            document.querySelectorAll('#role-card-container .role-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const role = e.currentTarget.dataset.role; 
                     handleRoleChange(role); 
                });
            });
        }

        function renderEffortChart() {
            const canvas = document.getElementById('effortChart');
            if(!canvas) return;

            const ctx = canvas.getContext('2d');
            const labels = phaseOrder.map(pid => {
                const key = phaseKey(pid);
                return translations[currentLanguage][`${key}_name`] || pid;
            });
            const data = [10, 25, 25, 15, 15, 5, 5];

            const width = canvas.width = canvas.parentElement.clientWidth;
            const height = canvas.height = 300;
            const max = Math.max(...data);
            ctx.clearRect(0,0,width,height);
            ctx.font = '14px sans-serif';
            labels.forEach((label, i) => {
                const barHeight = height / data.length * 0.6;
                const y = (i + 0.2) * (height / data.length);
                const barWidth = (data[i] / max) * (width - 120);
                ctx.fillStyle = '#0d9488';
                ctx.fillRect(100, y, barWidth, barHeight);
                ctx.fillStyle = '#000';
                ctx.fillText(label, 10, y + barHeight*0.75);
                ctx.fillText(data[i] + '%', 110 + barWidth, y + barHeight*0.75);
            });
        }
        
        function showModal(checklistRef, gateNamePassed, gatePurposePassed) {
             const checklistItems = decisionGateChecklists[currentLanguage]?.[checklistRef];
             const modalTitle = gateNamePassed || (translations[currentLanguage].view_checklist || "Checklist");
             const modalPurpose = gatePurposePassed || "";

             if (!checklistItems || !Array.isArray(checklistItems)) {
                 modalContentElement.innerHTML = `<h3 class="text-xl font-bold mb-2">${modalTitle}</h3><p>Checklist content not available for ${checklistRef}.</p>`;
             } else {
                 const createChecklistAccordions = (items) => items.map(item => `
                    <details class="info-accordion">
                        <summary>${item.summary}</summary>
                        <div class="details-content"><p>${item.details}</p></div>
                    </details>
                 `).join('');
                 modalContentElement.innerHTML = `<h3 class="text-xl font-bold mb-2">${modalTitle}</h3><p class="text-sm text-slate-600 mb-4">${modalPurpose}</p><div class="space-y-2">${createChecklistAccordions(checklistItems)}</div>`;
             }
             modalBackdrop.classList.remove('hidden');
             modal.classList.remove('hidden');
        }

       function hideModal() {
            modalBackdrop.classList.add('hidden');
            modal.classList.add('hidden');
            modalContentElement.innerHTML = '';
       }

        function saveProgress() {
            localStorage.setItem('epdpProgress', JSON.stringify(progressState));
        }

        function updateProgressBar() {
            const checkboxes = detailView.querySelectorAll('.task-checkbox');
            const completed = detailView.querySelectorAll('.task-checkbox:checked').length;
            const total = checkboxes.length;
            const percent = total ? Math.round(completed / total * 100) : 0;
            const bar = detailView.querySelector('#progress-bar');
            const text = detailView.querySelector('#progress-text');
            if(bar) bar.style.width = percent + '%';
            if(text) text.textContent = `${completed}/${total} (${percent}%)`;
        }

        function generateFolderPath() {
            const projNameInput = document.getElementById('project-name');
            const projCodeInput = document.getElementById('project-code');
            const projName = projNameInput.value.trim().replace(/[^\w\s-]/gi, '').replace(/\s+/g, '_');
            const projCode = projCodeInput.value.trim().toUpperCase().replace(/[^\w-]/gi, '');
            const selectedDeliverableFolder = folderTypeSelector.value;
            
            if (!projName || !projCode) {
                folderOutput.textContent = translations[currentLanguage].utils_proj_name_code_error || 'Please enter a valid Project Name and Project Code.';
                folderOutput.className = 'mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm font-mono break-all';
                return;
            }
             if (!selectedDeliverableFolder && folderTypeSelector.options.length > 0 && folderTypeSelector.value === "" && folderTypeSelector.options[0]?.value !== "") { // Check if a meaningful option exists and none is selected
                folderOutput.textContent = translations[currentLanguage].utils_folder_type_error || 'Please select a Deliverable/Folder Type.';
                folderOutput.className = 'mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm font-mono break-all';
                return;
            }

            const phaseDataForPath = fullPhaseData[currentPhase]?.[currentLanguage];
            let phasePathSegment = "Unknown_Phase";
            if(phaseDataForPath) {
                const key = phaseKey(currentPhase);
                const titlePart = (translations[currentLanguage][`${key}_name`] || currentPhase).split(':')[0].trim();
                phasePathSegment = titlePart.replace(/[^\w\s-]/gi, '').replace(/\s+/g, '_');
            } else {
                 phasePathSegment = currentPhase.replace('phase-','Phase_'); 
            }
            const phaseNum = currentPhase.split('-')[1];

            const actualDeliverableFolder = selectedDeliverableFolder || "General_Docs"; // Use selected or fallback

            const folderPath = `\\\\Limi_NAS\\Projects\\${projCode}_${projName}\\${phaseNum}_${phasePathSegment}\\${actualDeliverableFolder}\\`;
            folderOutput.textContent = folderPath;
            folderOutput.className = 'mt-4 p-3 bg-slate-100 text-gray-800 rounded-md text-sm font-mono break-all';
        }

        function addTemplateListeners() {
            detailView.querySelectorAll('.open-template').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    const key = e.currentTarget.dataset.template;
                    const tmpl = templates[key]?.[currentLanguage] || templates[key]?.en || '<p>Template not available.</p>';
                    modalContentElement.innerHTML = tmpl;
                    modalBackdrop.classList.remove('hidden');
                    modal.classList.remove('hidden');
                });
            });
        }
        
        function populateRoleSelector() {
            const rolesOrder = ['DEFAULT','PM', 'LE', 'DE', 'PURCHASING', 'PRODUCTION', 'QC', 'ADMIN']; 
            roleSelector.innerHTML = rolesOrder.map(key => {
                const langKey = `role_${key.toLowerCase()}`;
                return `<option value="${key}">${translations[currentLanguage][langKey] || key}</option>`;
            }).join('');
            roleSelector.value = currentRole; 
        }
        
        function populateFolderSelector() {
            const currentPhaseData = fullPhaseData[currentPhase]?.[currentLanguage];
            let phaseDeliverables = [];
            if (currentPhaseData && currentPhaseData.sections) {
                currentPhaseData.sections.forEach(section => {
                    if (section.type === 'output' && section.items) {
                        section.items.forEach(itemStr => {
                            const nasPathMatches = [...itemStr.matchAll(/<span class="nas-path">.*?\/([^\/]+?\/?)<\/span>/g)];
                            nasPathMatches.forEach(match => {
                                if (match && match[1]) {
                                    let deliverableName = match[1].replace(/\/$/, ''); // Remove trailing slash if it's a directory
                                    // Further refine to get the last folder part if it's a file path
                                    if (!deliverableName.match(/^\d{2,}_/) && deliverableName.includes('/')) {
                                       const parts = deliverableName.split('/');
                                       deliverableName = parts[parts.length-1] || parts[parts.length-2]; // take file or its parent dir
                                    }
                                     if (deliverableName.match(/^\d{2,}_/) || /^[A-Za-z_]+$/.test(deliverableName.split('.')[0])) {
                                        phaseDeliverables.push(deliverableName.replace(/\.[^/.]+$/, "")); // Remove extension
                                    }
                                }
                            });
                        });
                    }
                });
            }
            
            const genericFoldersByPhase = {
                'phase-1': ['01_Product_Brief_Clarifications', '02_Preliminary_Research_Ideation', '03_Conceptual_Designs', '04_Concept_Selection_Notes'],
                'phase-2': ['01_Design_V0.x', '02_LowFi_Proto_Plan', '03_LowFi_Prototypes_and_Iterations', '04_LowFi_Proto_Review_Notes'],
                'phase-3': ['01_Design_V1.0', '02_HiFi_Proto_Plan', '03_HiFi_Prototypes_and_Testing', '04_DFM_DFA_Review', '05_Pre-Production_Design_Package_V1.0'],
                'phase-4': ['01_Supplier_Shortlist', '02_RFQs_and_Responses', '03_Sample_Supplier_Selection', '04_Sample_POs', '05_Sample_Reception_Notes'],
                'phase-5': ['01_Trial_Production_Plan', '02_Trial_Production_Logs_and_Data', '03_Trial_Production_Review_Report', '04_Final_Production_Package'],
                'phase-6': ['01_FMPR_Report', '02_Ongoing_Production_Reports', '03_Ongoing_QC_Reports'],
                'phase-7': ['01_Post_Launch_Reviews', '02_Improvement_Actions_ECRs', '03_Lessons_Learned_KB']
            };
            if (phaseDeliverables.length === 0) { 
                phaseDeliverables = genericFoldersByPhase[currentPhase] || ['General_Docs', 'CAD_Files', 'Reports'];
            }
            
            phaseDeliverables = [...new Set(phaseDeliverables)].sort(); 

            folderTypeSelector.innerHTML = phaseDeliverables.map(folder => {
                let label = folder.replace(/^\d{2,}_/, '').replace(/_/g, ' ');
                label = label.charAt(0).toUpperCase() + label.slice(1);
                return `<option value="${folder}">${label}</option>`;
            }).join('');

            if (phaseDeliverables.length === 0 || (phaseDeliverables.length === 1 && !phaseDeliverables[0])) {
                folderTypeSelector.innerHTML = `<option value="">${translations[currentLanguage].no_deliverables_for_path || 'No specific deliverables for path'}</option>`;
                 document.getElementById('generate-folder-btn').disabled = true;
            } else {
                document.getElementById('generate-folder-btn').disabled = false;
            }
        }

        function handleSearch() {
            const query = searchInput.value.trim().toLowerCase();
            const searchTargets = document.querySelectorAll('#detail-view *:not(script), #tab-content *:not(script)');
            searchTargets.forEach(el => {
                if (el.children.length) return;
                const text = el.textContent.toLowerCase();
                if (query && text.includes(query)) {
                    el.classList.remove('hidden');
                    if (!el.dataset.orig) el.dataset.orig = el.innerHTML;
                    el.innerHTML = el.dataset.orig.replace(new RegExp(query, 'ig'), m => `<mark class="bg-yellow-200">${m}</mark>`);
                } else {
                    if (el.dataset.orig) el.innerHTML = el.dataset.orig;
                    if (query) {
                        el.classList.add('hidden');
                    } else {
                        el.classList.remove('hidden');
                    }
                }
            });
        }

        langToggle.addEventListener('change', handleLanguageChange);
        roleSelector.addEventListener('change', (e) => handleRoleChange(e.target.value));
        modalBackdrop.addEventListener('click', hideModal);
        modalCloseButton.addEventListener('click', hideModal);
        generateFolderBtn.addEventListener('click', generateFolderPath);
        if(searchInput) searchInput.addEventListener('input', handleSearch);

       currentRole = roleSelector.value;
       populateRoleSelector();
       setActivePhase(initialPhase);
       renderAll();
       handleSearch();
       window.addEventListener('resize', () => { if(currentTab === 'chart') renderEffortChart(); });
       updateProgressBar();
   });
