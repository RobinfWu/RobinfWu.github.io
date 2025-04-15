document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const jinContainer = document.getElementById('jin-graph');
    const appContainer = document.getElementById('app-graph');
    const contentFrame = document.getElementById('content-frame');

    // Define Jin graph nodes and edges
    const jinNodes = [
        { id: 'QS', label: 'Qǐ Shì', path: 'Qi_Shi' },
        { id: 'JG_J1', label: 'Jīngāng - 1', path: 'Jingang/Jin1' },
        { id: 'JG_J2', label: 'Jīngāng - 2', path: 'Jingang/Jin2' },
        { id: 'LZY', label: 'Lǎn Zhā Yī', path: 'Lan_Zha_Yi' },
        { id: 'LFSB', label: 'Liù Fēng Sì Bì', path: 'Liu_Feng_Si_Bi' },
        { id: 'DB', label: 'Dān Biān', path: 'Dan_Bian' },
		{ id: 'XX1', label: 'Xié Xíng - 1', path: 'Xie_Xing/Part1' },
		{ id: 'XX2', label: 'Xié Xíng - 2', path: 'Xie_Xing/Part2' },
		{ id: 'BHLC', label: 'Báihè Liàng Chì', path: 'Baihe_Liang_Chi' },
		{ id: 'BZK', label: 'Bèi Zhé Kào', path: 'Bei_Zhe_Kao' },
		{ id: 'BSC', label: 'Bì Shēn Chuí', path: 'Bi_Shen_Chui' },
		{ id: 'QLC', label: 'Qīnglóng Chūshuǐ', path: 'Qinglong_Chushui' },
		{ id: 'ST', label: 'Shuāng Tuīshǒu', path: 'Shuang_Tuishou' },
		{ id: 'SHZ', label: 'Sān Huàn Zhǎng', path: 'San_Huang_Zhang' },
		{ id: 'ZDC', label: 'Zhǒu Dǐ Chuí', path: 'Zhou_Di_Chui' },
		{ id: 'DJH', label: 'Dào Juǎn Hong', path: 'Dao_Juan_Hong' },
		{ id: 'TYZ', label: 'Tuìbù Yā Zhǒu', path: 'Tui_Ya_Zhou' },
		{ id: 'ZP', label: 'Zhōng Pán', path: 'Zhong_Pan' },
        { id: 'YS', label: 'Yùn Shǒu', path: 'Yun_Shou' },
        { id: 'GTM', label: 'Gāo Tànmǎ', path: 'Gao_Tanma' },
        { id: 'CZ', label: 'Yòu/Zuǒ Cā Jiǎo', path: 'Ca_Jiao' },
        { id: 'JDC', label: 'Jī De Chuí', path: 'Ji_De_Chui' },
        { id: 'FEQJ', label: 'Fānshēn Èr Qǐ Jiǎo', path: 'Fanshen_Er_Qi_Jiao' },
        { id: 'HXC', label: 'Hù Xīn Chuí', path: 'Hu_Xin_Chui' },
        { id: 'SBL', label: 'Shuāng Bǎi Lián', path: 'Shuang_Bai_Lian' },
        { id: 'SDBL', label: 'Shízì Dān Bǎi Lián', path: 'Shizi_Dan_Bai_Lian' },
    ];

    const jinLinks = [
        { source: 'QS', target: 'JG_J1', id: 'e1' },
        { source: 'JG_J1', target: 'JG_J2', id: 'e2' },
        { source: 'JG_J2', target: 'LZY', id: 'e3' },
		{ source: 'LZY', target: 'LFSB', id: 'e4' },
        { source: 'LFSB', target: 'DB', id: 'e5' },
        { source: 'DB', target: 'YS', id: 'e6' },
		{ source: 'DB', target: 'BHLC', id: 'e7' },
		{ source: 'BHLC', target: 'XX1', id: 'e8' },
		{ source: 'XX1', target: 'XX2', id: 'e9' },
		{ source: 'XX1', target: 'JDC', id: 'e10' },
        { source: 'DB', target: 'JG_J2', id: 'e11' },
        { source: 'JG_J2', target: 'BZK', id: 'e12' },
        { source: 'BZK', target: 'BSC', id: 'e13' },
        { source: 'BSC', target: 'QLC', id: 'e14' },
        { source: 'QLC', target: 'ST', id: 'e15' },
        { source: 'ST', target: 'SHZ', id: 'e16' },
        { source: 'SHZ', target: 'ZDC', id: 'e17' },
        { source: 'ZDC', target: 'DJH', id: 'e18' },
        { source: 'DJH', target: 'TYZ', id: 'e19' },
        { source: 'TYZ', target: 'ZP', id: 'e20' },
        { source: 'YS', target: 'GTM', id: 'e21' },
        { source: 'GTM', target: 'CZ', id: 'e22' },
        { source: 'YS', target: 'SBL', id: 'e23' },
        { source: 'JDC', target: 'FEQJ', id: 'e24' },
        { source: 'FEQJ', target: 'HXC', id: 'e25' },
    ];

    // Define Applications graph nodes and edges
    const appNodes = [
		{ id: 'DingBu', label: 'Ding Bu Stance', path: 'Ding_Bu' },
		{ id: 'Inner-Elbows Grab', label: 'Inner-Elbows Grab', path: 'Inner_Elbows Grab' },
		{ id: 'Mirror Wrist Grab', label: 'Mirror Wrist Grab', path: 'Mirror_Wrist_Grab' },
		{ id: 'Cross Wrist Grab', label: 'Cross Wrist Grab', path: 'Cross_Wrist_Grab' },
		{ id: 'LZY', label: 'Lǎn Zhā Yī', path: 'Lan_Zha_Yi' },
		{ id: 'LFSB', label: 'Liù Fēng Sì Bì', path: 'Liu_Feng_Si_Bi' },
		{ id: 'XX', label: 'Xie Xing', path: 'Gao_Tanma' },
		{ id: 'GTM', label: 'Gāo Tànmǎ', path: 'Xie_Xing' },
		{ id: 'YS', label: 'Yùn Shǒu', path: 'Yun_Shou' },
    ];

    const appLinks = [
		{ source: 'DingBu', target: 'XX', id: 'a0' },
		{ source: 'Mirror Wrist Grab', target: 'LZY', id: 'a1' },
		{ source: 'Mirror Wrist Grab', target: 'GTM', id: 'a2' },
		{ source: 'Inner-Elbows Grab', target: 'LFSB', id: 'a3' },
		{ source: 'Inner-Elbows Grab', target: 'YS', id: 'a4' },
    ];

    // Define one-to-many mapping (Jin to Applications)
    const nodeMapping = {
        'QS': ['QS'],
        'LZY': [],
        'LFSB': [],
        'DB': [],
        'YS': [],
        'GTM_1': [],
        'GTM_2': [],
        'SBL': [],
        'SDBL': [],
    };
	
    // Get container dimensions
    const jinWidth = jinContainer.clientWidth;
    const jinHeight = jinContainer.clientHeight || 400;
    const appWidth = appContainer.clientWidth;
    const appHeight = appContainer.clientHeight || 400;

    // Create SVGs
    const jinSvg = d3.select('#jin-graph')
        .append('svg')
        .attr('width', jinWidth)
        .attr('height', jinHeight);

    const appSvg = d3.select('#app-graph')
        .append('svg')
        .attr('width', appWidth)
        .attr('height', appHeight);

    // Create zoomable groups
    const jinG = jinSvg.append('g');
    const appG = appSvg.append('g');

    // Set up zoom behavior
    const jinZoom = d3.zoom()
        .scaleExtent([0.5, 2])
        .on('zoom', (event) => {
            jinG.attr('transform', event.transform);
        });

    const appZoom = d3.zoom()
        .scaleExtent([0.5, 2])
        .on('zoom', (event) => {
            appG.attr('transform', event.transform);
        });

    jinSvg.call(jinZoom);
    appSvg.call(appZoom);

    // Initial node positions
    jinNodes.forEach((node, i) => {
        node.x = jinWidth / 2;
        node.y = (jinHeight / (jinNodes.length + 1)) * (i + 1);
    });

    appNodes.forEach((node, i) => {
        node.x = appWidth / 2;
        node.y = (appHeight / (appNodes.length + 1)) * (i + 1);
    });

    // Create force simulations
    const jinSimulation = d3.forceSimulation(jinNodes)
        .force('link', d3.forceLink(jinLinks).id(d => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-150))
        .force('center', d3.forceCenter(jinWidth / 2, jinHeight / 2))
        .force('y', d3.forceY(d => d.y).strength(0.5))
        .force('x', d3.forceX(d => d.x).strength(0.2))
        .force('collide', d3.forceCollide(60))
        .alphaDecay(0.05);

    const appSimulation = d3.forceSimulation(appNodes)
        .force('link', d3.forceLink(appLinks).id(d => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-150))
        .force('center', d3.forceCenter(appWidth / 2, appHeight / 2))
        .force('y', d3.forceY(d => d.y).strength(0.5))
        .force('x', d3.forceX(d => d.x).strength(0.2))
        .force('collide', d3.forceCollide(60))
        .alphaDecay(0.05);

    // Define gradients for Jin graph
    const jinDefs = jinSvg.append('defs');
    jinLinks.forEach(link => {
        jinDefs.append('linearGradient')
            .attr('id', `gradient-${link.id}`)
            .attr('gradientUnits', 'userSpaceOnUse')
            .call(g => {
                g.append('stop')
                    .attr('offset', '0%')
                    .attr('stop-color', '#000000');
                g.append('stop')
                    .attr('offset', '100%')
                    .attr('stop-color', '#ffffff');
            });
    });

    // Define gradients for App graph
    const appDefs = appSvg.append('defs');
    appLinks.forEach(link => {
        appDefs.append('linearGradient')
            .attr('id', `gradient-${link.id}`)
            .attr('gradientUnits', 'userSpaceOnUse')
            .call(g => {
                g.append('stop')
                    .attr('offset', '0%')
                    .attr('stop-color', '#000000');
                g.append('stop')
                    .attr('offset', '100%')
                    .attr('stop-color', '#ffffff');
            });
    });

    // Draw edges
    const jinLink = jinG.append('g')
        .selectAll('line')
        .data(jinLinks)
        .enter()
        .append('line')
        .attr('class', 'link')
        .style('stroke', d => `url(#gradient-${d.id})`);

    const appLink = appG.append('g')
        .selectAll('line')
        .data(appLinks)
        .enter()
        .append('line')
        .attr('class', 'link')
        .style('stroke', d => `url(#gradient-${d.id})`);

    // Draw nodes
    const jinNode = jinG.append('g')
        .selectAll('.node')
        .data(jinNodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('data-id', d => d.id)
        .call(d3.drag()
            .on('start', dragstartedJin)
            .on('drag', dragged)
            .on('end', dragendedJin));

    jinNode.append('rect')
        .attr('width', 100)
        .attr('height', 30)
        .attr('x', -50)
        .attr('y', -15)
        .attr('rx', 5);

    jinNode.append('text')
        .attr('dy', 5)
        .attr('text-anchor', 'middle')
        .text(d => d.label);

    const appNode = appG.append('g')
        .selectAll('.node')
        .data(appNodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('data-id', d => d.id)
        .call(d3.drag()
            .on('start', dragstartedApp)
            .on('drag', dragged)
            .on('end', dragendedApp));

    appNode.append('rect')
        .attr('width', 100)
        .attr('height', 30)
        .attr('x', -50)
        .attr('y', -15)
        .attr('rx', 5);

    appNode.append('text')
        .attr('dy', 5)
        .attr('text-anchor', 'middle')
        .text(d => d.label);

    // Track selected node
    let selectedNodeId = null;

    // Handle Jin graph interactions
    jinNode.on('click', (event, d) => {
        handleNodeClick(d, 'jin');
    });

    jinNode.on('mouseover', (event, d) => {
        handleNodeHover(d, 'jin', true);
    });

    jinNode.on('mouseout', (event, d) => {
        handleNodeHover(d, 'jin', false);
    });

    // Handle App graph interactions
    appNode.on('click', (event, d) => {
        handleNodeClick(d, 'app');
    });

    appNode.on('mouseover', (event, d) => {
        handleNodeHover(d, 'app', true);
    });

    appNode.on('mouseout', (event, d) => {
        handleNodeHover(d, 'app', false);
    });

    // Click handler
    function handleNodeClick(d, graph) {
        console.log(`Node clicked (${graph}):`, d.label, 'Path:', d.path);
        // Reset previous selection
        if (selectedNodeId) {
            d3.selectAll('.node').filter(n => n.id === selectedNodeId)
                .classed('selected', false);
        }
        // Highlight current node
        d3.selectAll(`.node[data-id="${d.id}"]`)
            .classed('selected', true);
        selectedNodeId = d.id;
        // Load content
        const folder = graph === 'jin' ? 'Taolu' : 'Applications';
        const fullPath = `${folder}/${d.path}/content.html`;
        console.log('Loading content from:', fullPath);
        contentFrame.src = fullPath;
    }

    // Hover handler
    function handleNodeHover(d, graph, isHovering) {
        let ids = [d.id]; // Always include the hovered node
        if (graph === 'jin') {
            // Jin to Applications: one-to-many
            ids = ids.concat(nodeMapping[d.id] || []);
        } else {
            // Applications to Jin: many-to-one
            ids = ids.concat(Object.keys(nodeMapping).filter(jinId => nodeMapping[jinId].includes(d.id)));
        }
        d3.selectAll(ids.map(id => `.node[data-id="${id}"]`).join(','))
            .classed('hovered', isHovering);
    }

    // Update positions on tick
    jinSimulation.on('tick', () => {
        jinLink
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        // Update Jin gradients
        jinLinks.forEach(link => {
            const gradient = jinSvg.select(`#gradient-${link.id}`);
            gradient
                .attr('x1', link.source.x)
                .attr('y1', link.source.y)
                .attr('x2', link.target.x)
                .attr('y2', link.target.y);
        });

        jinNode
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    appSimulation.on('tick', () => {
        appLink
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        // Update App gradients
        appLinks.forEach(link => {
            const gradient = appSvg.select(`#gradient-${link.id}`);
            gradient
                .attr('x1', link.source.x)
                .attr('y1', link.source.y)
                .attr('x2', link.target.x)
                .attr('y2', link.target.y);
        });

        appNode
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions for Jin graph
    function dragstartedJin(event, d) {
        if (!event.active) jinSimulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragendedJin(event, d) {
        if (!event.active) jinSimulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Drag functions for App graph
    function dragstartedApp(event, d) {
        if (!event.active) appSimulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragendedApp(event, d) {
        if (!event.active) appSimulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Initial iframe message
    if (contentFrame.contentDocument) {
        contentFrame.contentDocument.body.innerHTML = '<p style="padding: 20px; color: #e0e0e0;">Select a node from either graph to view its details here.</p>';
    }
});