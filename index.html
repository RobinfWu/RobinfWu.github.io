document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const container = document.getElementById('jin-graph');
    const contentFrame = document.getElementById('content-frame');

    // Define nodes and edges
    const nodes = [
        { id: 'QS_J1', label: 'Qi Shi - Peng', path: 'Qi_Shi/Jin1' },
        { id: 'QS_J2', label: 'Qi Shi - Chuan', path: 'Qi_Shi/Jin2' },
        { id: 'QS_J3', label: 'Qi Shi - Zhao', path: 'Qi_Shi/Jin3' },
        { id: 'JG_J1', label: 'Jingang - Jin 1', path: 'Jingang/Jin1' },
        { id: 'JG_J2', label: 'Jingang - Jin 2', path: 'Jingang/Jin2' },
    ];

    const links = [
        { source: 'QS_J1', target: 'QS_J2', id: 'e1' },
        { source: 'QS_J2', target: 'QS_J3', id: 'e2' },
		{ source: 'QS_J3', target: 'JG_J1', id: 'e3' },
        { source: 'JG_J1', target: 'JG_J2', id: 'e4' },
    ];

    // Get container dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    // Create SVG
    const svg = d3.select('#jin-graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create zoomable group
    const g = svg.append('g');

    // Set up zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.5, 2]) // Zoom limits: 0.5x to 2x
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    // Initial node positions (approximate vertical layout)
    nodes.forEach((node, i) => {
        node.x = width / 2;
        node.y = (height / (nodes.length + 1)) * (i + 1);
    });

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-150))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('y', d3.forceY(d => d.y).strength(0.5))
        .force('x', d3.forceX(d => d.x).strength(0.2))
        .force('collide', d3.forceCollide(60))
        .alphaDecay(0.05);

    // Draw edges
    const link = g.append('g')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('class', 'link');

    // Draw nodes
    const node = g.append('g')
        .selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    node.append('rect')
        .attr('width', 100)
        .attr('height', 30)
        .attr('x', -50)
        .attr('y', -15)
        .attr('rx', 5);

    node.append('text')
        .attr('dy', 5)
        .attr('text-anchor', 'middle')
        .text(d => d.label);

    // Track selected node
    let selectedNodeId = null;

    // Handle click
    node.on('click', (event, d) => {
        console.log('Node clicked:', d.label, 'Path:', d.path);
        // Reset previous selection
        if (selectedNodeId) {
            d3.selectAll('.node').filter(n => n.id === selectedNodeId)
                .classed('selected', false);
        }
        // Highlight current node
        d3.select(event.currentTarget)
            .classed('selected', true);
        selectedNodeId = d.id;
        // Load content
        const fullPath = `Taolu/${d.path}/content.html`;
        console.log('Loading content from:', fullPath);
        contentFrame.src = fullPath;
    });

    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Initial iframe message
    if (contentFrame.contentDocument) {
        contentFrame.contentDocument.body.innerHTML = '<p style="padding: 20px; color: #e0e0e0;">Select a Jin from the graph on the left to view its details here.</p>';
    }
});
