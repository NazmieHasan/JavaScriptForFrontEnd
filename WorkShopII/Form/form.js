function renderForm() {
    let heading=$('<h1>');
    heading
        .text('Basic calculated fields sample.')
        .appendTo('#header-ctr');

    let hr=$("<hr>");
    hr.appendTo('#header-ctr');

    let labelOne=$('<label>');
    labelOne
        .addClass('one')
        .appendTo('form');

    let distance=$('<span>');
    distance.text('Distance (mi) *')
        .appendTo(labelOne);

    let inputDistance=$('<input>');
    inputDistance
        .attr('type','text')
        .attr('placeholder','Enter Distance')
        .attr('required',true)
        .appendTo(labelOne);

    let labelTwo=$('<label>');
    labelTwo
        .addClass('two')
        .appendTo('form');

    let spanWeight=$('<span>');
    spanWeight
        .text('Weight (lb)')
        .appendTo(labelTwo);

    let inputWeight=$('<input>');
    inputWeight
        .attr('type','text')
        .attr('placeholder','Enter Weight')
        .attr('required',true)
        .appendTo(labelTwo);

    let fragile=$('<span>');
    fragile
        .text('Fragile')
        .addClass('fragile')
        .appendTo(labelTwo);

    let selectMenu=$('<select>');
    selectMenu
        .attr('name','fragile-menu')
        .appendTo(labelTwo);

    let firstOption=$('<option>');
    firstOption
        .attr('value','Value 0')
        .attr('selected',true)
        .attr('disabled',true)
        .text('Select Something')
        .appendTo(selectMenu);

    let secondOption=$('<option>');
    secondOption
        .attr('value','Value 1')
        .text('No')
        .appendTo(selectMenu);

    let lastOption=$('<option>');
    lastOption
        .attr('value','Value 2')
        .text('Yes')
        .appendTo(selectMenu);

    let labelThree=$('<label>');
    labelThree
        .addClass('three')
        .appendTo('form');

    let spanLength=$('<span>');
    spanLength
        .text('Length (in)')
        .appendTo(labelThree);

    let heightIn=$('<span>');
    heightIn
        .text('height (in)')
        .addClass('height')
        .appendTo(labelThree);

    let widthIn=$('<span>');
    widthIn
        .text('width (in)')
        .addClass('width')
        .appendTo(labelThree);

    let inputLength=$('<input>');
    inputLength
        .attr('type','number')
        .attr('placeholder','Length')
        .appendTo(labelThree);

    let inputHeight=$('<input>');
    inputHeight
        .attr('type','number')
        .attr('placeholder','Height')
        .appendTo(labelThree);

    let range=$('<input>');
    range
        .attr('type','number')
        .attr('placeholder','10')
        .attr('min','1')
        .attr('max','1000')
        .appendTo(labelThree);

    let labelFour=$('<label>');
    labelFour
        .addClass('four')
        .appendTo('form');

    let heading3=$('<h3>');
    heading3
        .text('Extra services:')
        .appendTo(labelFour);

    let paragraphOne=$('<p>');
    paragraphOne
        .text('Insurance')
        .appendTo(labelFour);

    let paragraphTwo=$('<p>');
    paragraphTwo
        .text('Express Delivery')
        .appendTo(labelFour);

    let checkboxOne=$('<input>');
    checkboxOne
        .attr('type','checkbox')
        .prependTo(paragraphOne);

    let checkboxTwo=$('<input>');
    checkboxTwo
        .attr('type','checkbox')
        .prependTo(paragraphTwo);

    let labelPrice=$('<label>');
    labelPrice
        .addClass('price')
        .appendTo('form');

    let spanTotal=$('<span>');
    spanTotal
        .text('total:')
        .appendTo(labelPrice);

    let totalPriceParagraph=$('<p>');
    totalPriceParagraph
        .addClass('total-price')
        .text('$00.00')
        .appendTo(labelPrice);

    let pSubmit=$('<p>');
    pSubmit
        .addClass('submit')
        .text('I am Ready')
        .appendTo('form');
}
renderForm()