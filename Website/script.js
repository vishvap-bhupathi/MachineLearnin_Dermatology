<!-- Tabs -->
<section id="dataprep" class="tab-section">
    <h2>Data Preparation</h2>
</section>

<section id="eda" class="tab-section">
    <h2>Exploratory Data Analysis</h2>
</section>

<section id="data" class="tab-section active">
    <h2>Data Overview</h2>
    <div class="data-box" onclick="showTab('dataprep')">Data Prep</div>
    <div class="data-box" onclick="showTab('eda')">EDA</div>
</section>

<script>
function showTab(tabId){
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}
</script>

<style>
.tab-section { display: none; }
.tab-section.active { display: block; }
</style>
