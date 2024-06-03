// Define global variables
let canvasCircle, canvasTriangle, canvasSquare;
let canvasCircleButton, canvasTriangleButton, canvasSquareButton;
let resetButton
let squareSelector;
let circleImg, triangleImg, squareImg, rectangleImg, rhombusImg, parallelogramImg, trapezoidImg

//Load images
function preload()
{
  circleImg = loadImage('Pictures/Circle.png');
  triangleImg = loadImage('Pictures/Triangle.png');
  squareImg = loadImage('Pictures/Square.png');
  rectangleImg = loadImage('Pictures/Rectangle.png');
  rhombusImg = loadImage('Pictures/Rhombus.png');
  parallelogramImg = loadImage('Pictures/Parallelogram.png');
  trapezoidImg = loadImage('Pictures/Trapezoid.png');
}


function setup() 
{
  createCanvas(1200, 140);
  angleMode(DEGREES);

  // Modify canvas for circle
  canvasCircle = createGraphics(width, height * 6);
  canvasCircle.background(90);
  canvasCircle.strokeWeight(4);
  canvasCircle.fill(140);
  canvasCircle.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasCircle.rect(300, 15, width - 320, height * 5.8, 20);
  canvasCircle.fill(255);
  canvasCircle.fill(0);
  canvasCircle.textSize(30);
  canvasCircle.text("Radius:", 55, 55);
  canvasCircle.text("Diameter:", 35, 115);
  canvasCircle.text("Area:", 55, 175)
  canvasCircle.textSize(20);
  canvasCircle.text("Circumference:", 30, 235);
  circleImg.resize(230, 230);
  canvasCircle.image(circleImg, 30, 450);
  canvasCircle.textSize(37.5);
  canvasCircle.text("Instert just one valid number to calculate the circle.", 315, 75);


  // Modify canvas for triangle
  canvasTriangle = createGraphics(width, height * 6);
  canvasTriangle.background(90);
  canvasTriangle.strokeWeight(4);
  canvasTriangle.fill(140);
  canvasTriangle.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasTriangle.rect(300, 15, width - 320, height * 5.8, 20);
  canvasTriangle.fill(0);
  canvasTriangle.textSize(30);
  canvasTriangle.text("Side a:", 50, 55);
  canvasTriangle.text("Side b:", 50, 115);
  canvasTriangle.text("Side c:", 50, 175);
  canvasTriangle.text("Angle A:", 37, 240);
  canvasTriangle.text("Angle B:", 37, 300);
  canvasTriangle.text("Angle C:", 37, 360);
  canvasTriangle.text("Area:", 35, 530);
  canvasTriangle.text("r:", 35, 590);
  canvasTriangle.text("R:", 35, 650);
  triangleImg.resize(200, 140);
  canvasTriangle.image(triangleImg, 45, 670)
  canvasTriangle.textSize(37.5);
  canvasTriangle.text("Instert three valid dimensions ", 495, 75);
  canvasTriangle.text("to calculate the triangle.", 545, 125);

  // Modify canvas for Square
  canvasSquare = createGraphics(width, height * 6);
  canvasSquare.background(90);
  canvasSquare.strokeWeight(4);
  canvasSquare.fill(140);
  canvasSquare.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasSquare.rect(300, 15, width - 320, height * 5.8, 20);
  canvasSquare.fill(0);
  canvasSquare.textSize(30);
  squareImg.resize(230, 200);
  rhombusImg.resize(230,180);
  canvasSquare.textSize(37.5);
  canvasSquare.text("Choose the square you want to calculate and insert", 315, 75);
  canvasSquare.text("all valid dimensions to calculate the square.", 380, 125);

  // Create button for circle
  canvasCircleButton = createButton('Circle');
  canvasCircleButton.size(200, 80);
  canvasCircleButton.position(40, 35);
  canvasCircleButton.mousePressed(switchToCircle);
  canvasCircleButton.style("font-size", "48px");

  // Create button for triangle
  canvasTriangleButton = createButton('Triangle');
  canvasTriangleButton.size(200, 80);
  canvasTriangleButton.position(300, 35);
  canvasTriangleButton.mousePressed(switchToTriangle);
  canvasTriangleButton.style("font-size", "48px");

  // Create button for square
  canvasSquareButton = createButton('Square');
  canvasSquareButton.size(200, 80);
  canvasSquareButton.position(560, 35);
  canvasSquareButton.mousePressed(switchToSquare);
  canvasSquareButton.style("font-size", "48px");

  // Create reset button
  resetButton = createButton('Reset');
  resetButton.size(200, 80);
  resetButton.position(900, 35);
  resetButton.mousePressed(resetCanvas);
  resetButton.style("font-size", "48px");
}

function draw() 
{


  // Display canvas for circle
  image(canvasCircle, 0, 0);

  // Display canvas for Triangle
  image(canvasTriangle, 0, 0);

  // Display canvas for Square
  image(canvasSquare, 0, 0);

  // Create background for switch-buttons
  fill(140);
  strokeWeight(3);
  rect(0, 0, width, 450);
  strokeWeight(5);
  line(0, height, width, height);
}

function switchToCircle() 
{
  // Show canvas for circles
  canvasCircle.show();
  canvasTriangle.hide();
  canvasSquare.hide();

  // Remove all fields from other canvases
  removeAllFields();
  removeSelector();

  // Reset canvas if forced reload
  canvasCircle.fill(140);
  canvasCircle.rect(300, 15, width - 320, height * 5.8, 20);
  canvasCircle.fill(0);
  canvasCircle.textSize(37.5);
  canvasCircle.text("Instert just one valid number to calculate the circle.", 315, 75);



  // Create input-fields for circle calculations
  canvasCircle.circleRadius = new InputField(170, 30 + height);
  canvasCircle.circleDiameter = new InputField(170, 90 + height);
  canvasCircle.circleArea = new InputField(170, 150 + height);
  canvasCircle.circleCircumference = new InputField(170, 210 + height);

  let calcButtonCircle = createButton('Calculate');
  calcButtonCircle.position(60, 280 + height);
  calcButtonCircle.size(150, 50);
  calcButtonCircle.mousePressed(circleCalculator);
  calcButtonCircle.class('input-button');
  calcButtonCircle.style("font-size", "30px"); 
}

function circleCalculator ()
{
  // Extract circle properties' values from input fields
  let radiusCircle = parseFloat(canvasCircle.circleRadius.input().value()) || 0;
  let diameterCircle = parseFloat(canvasCircle.circleDiameter.input().value()) || 0;
  let areaCircle = parseFloat(canvasCircle.circleArea.input().value()) || 0;
  let circumferenceCircle = parseFloat(canvasCircle.circleCircumference.input().value()) || 0;

    // Check if more than one field has a value
    let filledCount = (radiusCircle != 0) + (diameterCircle != 0) + (areaCircle != 0) + (circumferenceCircle != 0);
    if (filledCount > 1) {
      alert("Please provide only one value for calculation.");
      return;
    }

  // Calculations for circle  
  if (radiusCircle == 0 && diameterCircle == 0 && areaCircle == 0)
  {
      radiusCircle = (circumferenceCircle) / (2 * PI);
      diameterCircle = radiusCircle * 2;
      areaCircle = PI * (radiusCircle * radiusCircle) ;
  } else if (radiusCircle == 0 && diameterCircle == 0 && circumferenceCircle == 0)
  {
    radiusCircle = sqrt(areaCircle / PI);
    diameterCircle = radiusCircle * 2;
    circumferenceCircle = 2 * PI * radiusCircle;
  } else if (radiusCircle == 0 && areaCircle == 0 && circumferenceCircle == 0)
  {
    radiusCircle = diameterCircle / 2;
    areaCircle = PI * (radiusCircle * radiusCircle) ;
    circumferenceCircle = 2 * PI * radiusCircle;
  } else if (diameterCircle == 0 && areaCircle == 0 && circumferenceCircle == 0)
    {
      diameterCircle = radiusCircle * 2;
      areaCircle = PI * (radiusCircle * radiusCircle);
      circumferenceCircle = 2 * PI * radiusCircle;
    }

    // Display answers
    canvasCircle.circleRadius.input().value(radiusCircle.toFixed(2));
    canvasCircle.circleDiameter.input().value(diameterCircle.toFixed(2));
    canvasCircle.circleArea.input().value(areaCircle.toFixed(2));
    canvasCircle.circleCircumference.input().value(circumferenceCircle.toFixed(2));

    // Illustrate circle with calculated measurements 
    canvasCircle.fill(230);
    canvasCircle.circle(width * 0.6, height * 3.5, diameterCircle * 5);
}

function switchToTriangle() 
{
  // Show canvas for triangle
  canvasTriangle.show();
  canvasCircle.hide();
  canvasSquare.hide();


  // Remove all input fields from other canvases
  removeAllFields();
  removeSelector();

  // Reset canvas if forced reload
  canvasTriangle.fill(140);
  canvasTriangle.strokeWeight(4);
  canvasTriangle.rect(300, 15, width - 320, height * 5.8, 20);
  canvasTriangle.fill(0);
  canvasTriangle.strokeWeight(0);
  canvasTriangle.textSize(37.5);
  canvasTriangle.text("Instert three valid dimensions ", 495, 75);
  canvasTriangle.text("to calculate the triangle.", 545, 125);

  // Create the input fields for triangle calculations
  canvasTriangle.triangleSidea = new InputField(155, 30 + height);
  canvasTriangle.triangleSideb = new InputField(155, 90 + height);
  canvasTriangle.triangleSidec = new InputField(155, 150 + height);
  canvasTriangle.triangleAngleA = new InputField(155, 215 + height);
  canvasTriangle.triangleAngleB = new InputField(155, 275 + height);
  canvasTriangle.triangleAngleC = new InputField(155, 335 + height);
  canvasTriangle.triangleArea = new InputField(155, 505 + height, true);
  canvasTriangle.triangleCircumscribed = new InputField(155, 565 + height, true);
  canvasTriangle.TriangleInscribed = new InputField(155, 625 + height, true);
  
  let calcButtonTriangle = createButton('Calculate');
  calcButtonTriangle.position(50, 415 + height);
  calcButtonTriangle.size(150, 50);
  calcButtonTriangle.mousePressed(triangleCalculator);
  calcButtonTriangle.class('input-button');
  calcButtonTriangle.style("font-size", "30px"); 
} 

function triangleCalculator()
{
  // Extract triangle properties' values from input fields
  let aSideTriangle = parseFloat(canvasTriangle.triangleSidea.input().value()) || 0;
  let bSideTriangle = parseFloat(canvasTriangle.triangleSideb.input().value()) || 0;
  let cSideTriangle = parseFloat(canvasTriangle.triangleSidec.input().value()) || 0;
  let AAngleTriangle = parseFloat(canvasTriangle.triangleAngleA.input().value()) || 0;
  let BAngleTriangle = parseFloat(canvasTriangle.triangleAngleB.input().value()) || 0;
  let CAngleTriangle = parseFloat(canvasTriangle.triangleAngleC.input().value()) || 0;
  let areaTriangle;
  let circumscribedTriangle;
  let inscribedTriangle;

    // Check if more than one field has a value
    let filledCount = (aSideTriangle != 0) + (bSideTriangle != 0) + (cSideTriangle != 0) +
    (AAngleTriangle != 0) + (BAngleTriangle != 0) + (CAngleTriangle != 0);
  if (filledCount > 3) 
    {
    alert("Please provide only three values for calculation.");
    return;
  }
  // Calculations for triangle
  if (AAngleTriangle == 0 &&BAngleTriangle== 0 &&CAngleTriangle== 0) 
  {
   AAngleTriangle = acos((bSideTriangle * bSideTriangle + cSideTriangle * cSideTriangle-aSideTriangle * aSideTriangle) / (2 *bSideTriangle * cSideTriangle));
   BAngleTriangle = acos((aSideTriangle * aSideTriangle + cSideTriangle * cSideTriangle-bSideTriangle * bSideTriangle) / (2 *aSideTriangle * cSideTriangle));
   CAngleTriangle = 180 -AAngleTriangle- BAngleTriangle;
  } else if (AAngleTriangle == 0 &&BAngleTriangle == 0 && aSideTriangle == 0) 
  {
   BAngleTriangle = asin((sin(CAngleTriangle) * bSideTriangle) / cSideTriangle);
   AAngleTriangle = 180 -BAngleTriangle- CAngleTriangle;
    aSideTriangle = (sin(AAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
  } else if (AAngleTriangle == 0 && BAngleTriangle == 0 && bSideTriangle == 0) 
  {
   AAngleTriangle= asin((sin(CAngleTriangle) * aSideTriangle) / cSideTriangle);
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
   bSideTriangle= sqrt(aSideTriangle * aSideTriangle +cSideTriangle*cSideTriangle- 2 * aSideTriangle *cSideTriangle* cos(BAngleTriangle));
  } else if (AAngleTriangle== 0 &&BAngleTriangle== 0 &&cSideTriangle== 0) 
  {
   cSideTriangle= sqrt(aSideTriangle * aSideTriangle +bSideTriangle*bSideTriangle- 2 * aSideTriangle *bSideTriangle* cos(CAngleTriangle));
   AAngleTriangle= asin((sin(CAngleTriangle) * aSideTriangle) / cSideTriangle);
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
  } else if (AAngleTriangle== 0 &&CAngleTriangle== 0 && aSideTriangle == 0) 
  {
   CAngleTriangle= asin((sin(BAngleTriangle) * cSideTriangle) / bSideTriangle);
   AAngleTriangle= 180 -BAngleTriangle- CAngleTriangle;
    aSideTriangle = sqrt(bSideTriangle *bSideTriangle+cSideTriangle*cSideTriangle- 2 *bSideTriangle*cSideTriangle* cos(AAngleTriangle));
  } else if (AAngleTriangle== 0 &&CAngleTriangle== 0 &&bSideTriangle== 0) 
  {
   bSideTriangle= sqrt(aSideTriangle * aSideTriangle +cSideTriangle*cSideTriangle- 2 * aSideTriangle *cSideTriangle* cos(BAngleTriangle));
   AAngleTriangle= asin((sin(BAngleTriangle) * aSideTriangle) / bSideTriangle);
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
  } else if (AAngleTriangle== 0 &&CAngleTriangle== 0 &&cSideTriangle== 0) 
  {
   AAngleTriangle= asin((sin(BAngleTriangle) * aSideTriangle) / bSideTriangle);
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
   cSideTriangle= sqrt(aSideTriangle * aSideTriangle +bSideTriangle*bSideTriangle- 2 * aSideTriangle *bSideTriangle* cos(CAngleTriangle));
  } else if (BAngleTriangle== 0 &&CAngleTriangle== 0 && aSideTriangle == 0) 
  {
    aSideTriangle = sqrt(bSideTriangle *bSideTriangle+cSideTriangle*cSideTriangle- 2 *bSideTriangle*cSideTriangle* cos(AAngleTriangle));
   BAngleTriangle= asin((sin(AAngleTriangle) * bSideTriangle) / aSideTriangle);
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
  } else if (BAngleTriangle== 0 &&CAngleTriangle== 0 &&bSideTriangle== 0) 
  {
   CAngleTriangle= asin((sin(AAngleTriangle) * cSideTriangle) / aSideTriangle);
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
   bSideTriangle= sqrt(aSideTriangle * aSideTriangle +cSideTriangle*cSideTriangle- 2 * aSideTriangle *cSideTriangle* cos(BAngleTriangle));
  } else if (BAngleTriangle== 0 &&CAngleTriangle== 0 &&cSideTriangle== 0) 
  {
   BAngleTriangle= asin((sin(AAngleTriangle) * bSideTriangle) / aSideTriangle);
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
   cSideTriangle= sqrt(aSideTriangle * aSideTriangle +bSideTriangle*bSideTriangle- 2 * aSideTriangle *bSideTriangle* cos(CAngleTriangle));
  } else if (AAngleTriangle== 0 && aSideTriangle == 0 &&bSideTriangle== 0) 
  {
   AAngleTriangle= 180 -BAngleTriangle- CAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
   bSideTriangle= (sin(BAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
  } else if (AAngleTriangle== 0 &&aSideTriangle== 0 &&cSideTriangle== 0) 
  {
   AAngleTriangle= 180 -BAngleTriangle- CAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
  } else if (AAngleTriangle== 0 &&bSideTriangle== 0 &&cSideTriangle== 0) 
  {
   AAngleTriangle= 180 -BAngleTriangle- CAngleTriangle;
   bSideTriangle= (sin(BAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
  } else if (BAngleTriangle== 0 &&aSideTriangle== 0 &&bSideTriangle== 0) 
  {
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
   bSideTriangle= (sin(BAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
  } else if (BAngleTriangle== 0 &&aSideTriangle== 0 &&cSideTriangle== 0) 
  {
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
  } else if (BAngleTriangle== 0 &&bSideTriangle== 0 &&cSideTriangle== 0) 
  {
   BAngleTriangle= 180 -AAngleTriangle- CAngleTriangle;
   bSideTriangle= (sin(BAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
  } else if (CAngleTriangle == 0 &&aSideTriangle== 0 &&bSideTriangle== 0) 
  {
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
   bSideTriangle= (sin(BAngleTriangle) * cSideTriangle) / sin(CAngleTriangle);
  } else if (CAngleTriangle == 0 &&aSideTriangle== 0 &&cSideTriangle== 0) 
  {
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
   aSideTriangle= (sin(AAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * bSideTriangle) / sin(BAngleTriangle);
  } else if (CAngleTriangle == 0 &&bSideTriangle== 0 &&cSideTriangle== 0) 
  {
   CAngleTriangle= 180 -AAngleTriangle- BAngleTriangle;
   bSideTriangle= (sin(BAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
   cSideTriangle= (sin(CAngleTriangle) * aSideTriangle) / sin(AAngleTriangle);
  } 

  // Alert if triangle is unsolvable
  if (isNaN(AAngleTriangle) || isNaN(BAngleTriangle) || isNaN(CAngleTriangle) ||
    isNaN(aSideTriangle) || isNaN(bSideTriangle) || isNaN(cSideTriangle)) {
    alert("Some values cannot be calculated. Please ensure valid input.");
    return;
}

    // Calculate area, and radius of circumscribed and inscribed circles
    s = (aSideTriangle + bSideTriangle + cSideTriangle) / 2;
    areaTriangle = sqrt(s * (s - aSideTriangle) * (s - bSideTriangle) * (s - cSideTriangle));
    circumscribedTriangle = (aSideTriangle * bSideTriangle * cSideTriangle) / (4 * areaTriangle);
    inscribedTriangle = areaTriangle / s;

    canvasTriangle.triangleSidea.input().value(aSideTriangle.toFixed(2));
    canvasTriangle.triangleSideb.input().value(bSideTriangle.toFixed(2));
    canvasTriangle.triangleSidec.input().value(cSideTriangle.toFixed(2));
    canvasTriangle.triangleAngleA.input().value(AAngleTriangle.toFixed(2));
    canvasTriangle.triangleAngleB.input().value(BAngleTriangle.toFixed(2));
    canvasTriangle.triangleAngleC.input().value(CAngleTriangle.toFixed(2));
    canvasTriangle.triangleArea.input().value(areaTriangle.toFixed(2));
    canvasTriangle.triangleCircumscribed.input().value(inscribedTriangle.toFixed(2));
    canvasTriangle.TriangleInscribed.input().value(circumscribedTriangle.toFixed(2));

  // Reset canvas if multiple triangles are drawn  
  canvasTriangle.fill(140);
  canvasTriangle.strokeWeight(4);
  canvasTriangle.rect(300, 15, width - 320, height * 5.8, 20);

  // Draw triangle
  canvasTriangle.fill(235);

  // Limit side lengths to 20
  aSideTriangle = min(aSideTriangle, 20);
  bSideTriangle = min(bSideTriangle, 20);
  cSideTriangle = min(cSideTriangle, 20);

  // Calculate coordinates based on the sides and angles
  let triangleSize = 25 
  let trianglePositionX1 = width * 0.4;
  let trianglePositionY1 = height;
  let trianglePositionX2 = trianglePositionX1 + (aSideTriangle * triangleSize);
  let trianglePositionY2 = trianglePositionY1;
  let trianglePositionX3 = trianglePositionX1 + (cSideTriangle * triangleSize * cos(AAngleTriangle));
  let trianglePositionY3 = trianglePositionY1 + (cSideTriangle * triangleSize * sin(AAngleTriangle));

  // Draw triangle based on calculated measurements
  canvasTriangle.triangle(trianglePositionX1, trianglePositionY1, trianglePositionX2, trianglePositionY2, trianglePositionX3, trianglePositionY3);
}

function switchToSquare() 
{
  // Show canvas for squares
  canvasSquare.show();
  canvasCircle.hide();
  canvasTriangle.hide();

  // Remove all input fields from other canvases
  removeAllFields();

  //Reset canvas if forced reload
  canvasSquare.fill(140);
  canvasSquare.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasSquare.rect(300, 15, width - 320, height * 5.8, 20);
  canvasSquare.fill(0);
  canvasSquare.textSize(37.5);
  canvasSquare.text("Choose the square you want to calculate and insert", 315, 75);
  canvasSquare.text("all valid dimensions to calculate the square.", 380, 125);

  // Create the input fields for square canvas based on selection
  squareSelector = createSelect();
  squareSelector.position(65, 35 + height);
  squareSelector.size(150, 50);
  squareSelector.class('input-selector');
  squareSelector.style("font-size", "17px");
  squareSelector.option('Choose square');
  squareSelector.option('Square');
  squareSelector.option('Rectangle');
  squareSelector.option('Rhombus');
  squareSelector.option('Parallelogram');
  squareSelector.option('Trapezoid');

  // Function to handle selection change
  squareSelector.changed(() => 
    {
    removeAllFields(); // Remove existing fields when selector changes
    canvasSquare.fill(140);
    canvasSquare.rect(20, 15, 250, height * 5.8 + 1, 20);
    canvasSquare.rect(300, 15, width - 320, height * 5.8, 20);
    canvasSquare.fill(0);
    canvasSquare.textSize(37.5);
    canvasSquare.text("Choose the square you want to calculate and insert", 315, 75);
    canvasSquare.text("all valid dimensions to calculate the square.", 380, 125);

    // Recreate the calculate button to ensure it's not duplicated
    calcButtonSquare = createButton('Calculate');
    calcButtonSquare.position(50, 315 + height);
    calcButtonSquare.size(150, 50);
    calcButtonSquare.class('input-button');
    calcButtonSquare.style("font-size", "30px");
    calcButtonSquare.mousePressed(squareCalculator);

    canvasSquare.squareArea = new InputField(155, 395 + height, true)
    canvasSquare.text("Area:", 65, 423);

    // Create input fields for all types of squares
    switch (squareSelector.value()) {
      case 'Square':
        canvasSquare.squareSide = new InputField(155, 210 + height);
        canvasSquare.text("Side a:", 40, 238);
        canvasSquare.image(squareImg, 30, 465);
        break;
      case 'Rectangle':
        canvasSquare.rectangleSidea = new InputField(155, 150 + height);
        canvasSquare.rectangleSideb = new InputField(155, 210 + height);
        canvasSquare.text("Side a:", 35, 178);
        canvasSquare.text("Side b:", 35, 238);
        canvasSquare.image(rectangleImg, 30, 465);

        break;
      case 'Rhombus':
        canvasSquare.rhombusSideAC = new InputField(155, 150 + height);
        canvasSquare.rhombusSideBD = new InputField(155, 210 + height);
        canvasSquare.textSize(32);
        canvasSquare.text("Side AC:", 25, 178);
        canvasSquare.text("Side BD:", 25, 238);
        canvasSquare.image(rhombusImg, 30, 465);

        break;
      case 'Parallelogram':
        canvasSquare.parallelogramSidea = new InputField(155, 150 + height);
        canvasSquare.parallelogramHeight = new InputField(155, 210 + height);
        canvasSquare.text("Side g:", 35, 178);
        canvasSquare.text("Height:", 35, 238);
        canvasSquare.image(parallelogramImg, 30, 485);

        break;
      case 'Trapezoid':
        canvasSquare.trapezoidSideAD = new InputField(155, 130 + height);
        canvasSquare.trapezoidSideBC = new InputField(155, 190 + height);
        canvasSquare.trapezoidHeight = new InputField(155, 250 + height);
        canvasSquare.textSize(30);
        canvasSquare.text("Side AD:", 30, 158);
        canvasSquare.text("Side BC:", 30, 218);
        canvasSquare.text("Height:", 50, 278);
        canvasSquare.image(trapezoidImg, 30, 455);
        break;
      default:
        break;
    }
  });
}

function squareCalculator()
{
  // Extract square properties' values from input fields
  let shape = squareSelector.value();
  let aSideSquare = parseFloat(canvasSquare.squareSide?.input().value()) || 0;
  let aSideRectangle = parseFloat(canvasSquare.rectangleSidea?.input().value()) || 0;
  let bSideRectangle = parseFloat(canvasSquare.rectangleSideb?.input().value()) || 0;
  let acSideRhombus = parseFloat(canvasSquare.rhombusSideAC?.input().value()) || 0;
  let bdSideRhombus = parseFloat(canvasSquare.rhombusSideBD?.input().value()) || 0;
  let aSideParallelogram = parseFloat(canvasSquare.parallelogramSidea?.input().value()) || 0;
  let heightParallelogram = parseFloat(canvasSquare.parallelogramHeight?.input().value()) || 0;
  let adSideTrapezoid = parseFloat(canvasSquare.trapezoidSideAD?.input().value()) || 0;
  let bcSideTrapezoid = parseFloat(canvasSquare.trapezoidSideBC?.input().value()) || 0;
  let heightTrapezoid = parseFloat(canvasSquare.trapezoidHeight?.input().value()) || 0;
  let areaSquare = 0;

  // Calculate and draw for chosen square
  switch (shape) 
  {
    case 'Square':
        canvasSquare.fill(235);
        areaSquare = aSideSquare * aSideSquare;
        aSideSquare = min(aSideSquare, 50);
        canvasSquare.rect(450, 250, aSideSquare * 10, aSideSquare * 10);
        break;
    case 'Rectangle':
        if (aSideRectangle <= 0 || bSideRectangle <= 0) {
            alert("Please enter valid dimensions for the rectangle.");
            return;
        }
        canvasSquare.fill(235);
        areaSquare = aSideRectangle * bSideRectangle;
        aSideRectangle = min(aSideRectangle, 50);
        bSideRectangle = min(bSideRectangle, 70);
        canvasSquare.rect(width * 0.3, height * 1.5, bSideRectangle * 10, aSideRectangle * 10);
        break;
    case 'Rhombus':
        if (acSideRhombus <= 0 || bdSideRhombus <= 0) {
            alert("Please enter valid dimensions for the rhombus.");
            return;
        }
        canvasSquare.fill(235);
        areaSquare = acSideRhombus * bdSideRhombus * 0.5;
        acSideRhombus = min(acSideRhombus, 33);
        bdSideRhombus = min(bdSideRhombus, 33);
        let rhombusCenterX = width * 0.6, rhombusCenterY = height * 3.5;
        let rhombusHalfAC = acSideRhombus * 10;
        let rhombusHalfBD = bdSideRhombus * 10;
        canvasSquare.quad(
            rhombusCenterX, rhombusCenterY - rhombusHalfBD, // top
            rhombusCenterX + rhombusHalfAC, rhombusCenterY, // right
            rhombusCenterX, rhombusCenterY + rhombusHalfBD, // bottom
            rhombusCenterX - rhombusHalfAC, rhombusCenterY  // left
        );
        break;
    case 'Parallelogram':
        if (aSideParallelogram <= 0 || heightParallelogram <= 0) 
          {
            alert("Please enter valid dimensions for the parallelogram.");
            return;
        }
        canvasSquare.fill(235);
        areaSquare = aSideParallelogram * heightParallelogram;
        aSideParallelogram = min(aSideParallelogram, 40);
        heightParallelogram = min(heightParallelogram, 70);
        let paraX1 = 450, paraY1 = 250;
        let paraX2 = paraX1 + aSideParallelogram * 10, paraY2 = paraY1;
        let paraX3 = paraX2 + heightParallelogram * 5, paraY3 = paraY2 + heightParallelogram * 10;
        let paraX4 = paraX1 + heightParallelogram * 5, paraY4 = paraY1 + heightParallelogram * 10;
        canvasSquare.quad(paraX1, paraY1, paraX2, paraY2, paraX3, paraY3, paraX4, paraY4);
        break;
    case 'Trapezoid':
        if (adSideTrapezoid <= 0 || bcSideTrapezoid <= 0 || heightTrapezoid <= 0) 
        {
            alert("Please enter valid dimensions for the trapezoid.");
            return;
        }
        canvasSquare.fill(235);
        areaSquare = (adSideTrapezoid + bcSideTrapezoid) * heightTrapezoid * 0.5;
        adSideTrapezoid = min(adSideTrapezoid, 50);
        bcSideTrapezoid = min(bcSideTrapezoid, 40);
        heightTrapezoid = min(heightTrapezoid, 50);
        let trapX1 = width * 0.4, trapY1 = height * 5.5;
        let trapX2 = trapX1 + adSideTrapezoid * 10, trapY2 = trapY1;
        let trapX3 = trapX2 - (adSideTrapezoid - bcSideTrapezoid) * 5, trapY3 = trapY2 - heightTrapezoid * 10;
        let trapX4 = trapX1 + (adSideTrapezoid - bcSideTrapezoid) * 5, trapY4 = trapY1 - heightTrapezoid * 10;
        canvasSquare.quad(trapX1, trapY1, trapX2, trapY2, trapX3, trapY3, trapX4, trapY4);
        break;
    default:
        alert("Please choose a shape."); // Alert if no shape chosen
        return;
  }
  
  // Alert if error while calculating
  if (isNaN(areaSquare)) 
  {
    alert("An error occurred while calculating the area.");
    return;
  }

  // Display calculated area
  canvasSquare.squareArea.input().value(areaSquare.toFixed(2));
}

function resetCanvas() 
{
  // Clear graphics on canvases only
  canvasCircle.hide();
  canvasCircle.background(90); // Reset background color
  drawCircleCanvas(); // Redraw elements on circle canvas

  canvasTriangle.hide();
  canvasTriangle.background(90); // Reset background color
  drawTriangleCanvas(); // Redraw elements on triangle canvas

  canvasSquare.hide();
  canvasSquare.background(90); // Reset background color
  drawSquareCanvas(); // Redraw elements on square canvas

  removeAllFields();
  removeSelector();
}

function drawCircleCanvas()
{
    // Secure full reset by redrawing all elements on circle canvas
    canvasCircle.fill(140);
    canvasCircle.rect(20, 15, 250, height * 5.8 + 1, 20);
    canvasCircle.rect(300, 15, width - 320, height * 5.8, 20);
    canvasCircle.fill(0);
    canvasCircle.textSize(30);
    canvasCircle.text("Radius:", 55, 55);
    canvasCircle.text("Diameter:", 35, 115);
    canvasCircle.text("Area:", 55, 175)
    canvasCircle.textSize(20);
    canvasCircle.text("Circumference:", 30, 235);
    circleImg.resize(230, 230);
    canvasCircle.image(circleImg, 30, 450);
    canvasCircle.textSize(37.5);
    canvasCircle.text("Instert just one valid number to calculate the circle.", 315, 75);
}

function drawTriangleCanvas()
{
  //Secure full reset by redrawing all elements on triangle canvas
  canvasTriangle = createGraphics(width, height * 6);
  canvasTriangle.background(90);
  canvasTriangle.strokeWeight(4);
  canvasTriangle.fill(140);
  canvasTriangle.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasTriangle.rect(300, 15, width - 320, height * 5.8, 20);
  canvasTriangle.fill(0);
  canvasTriangle.textSize(30);
  canvasTriangle.text("Side a:", 50, 55);
  canvasTriangle.text("Side b:", 50, 115);
  canvasTriangle.text("Side c:", 50, 175);
  canvasTriangle.text("Angle A:", 37, 240);
  canvasTriangle.text("Angle B:", 37, 300);
  canvasTriangle.text("Angle C:", 37, 360);
  canvasTriangle.text("Area:", 35, 530);
  canvasTriangle.text("r:", 35, 590);
  canvasTriangle.text("R:", 35, 650);
  triangleImg.resize(200, 140);
  canvasTriangle.image(triangleImg, 45, 670)
  canvasTriangle.textSize(37.5);
  canvasTriangle.text("Instert three valid dimensions ", 495, 75);
  canvasTriangle.text("to calculate the triangle.", 545, 125);
}

function drawSquareCanvas()
{
  //Secure full reset by redrawing all elements on circle canvas
  canvasSquare = createGraphics(width, height * 6);
  canvasSquare.background(90);
  canvasSquare.strokeWeight(4);
  canvasSquare.fill(140);
  canvasSquare.rect(20, 15, 250, height * 5.8 + 1, 20);
  canvasSquare.rect(300, 15, width - 320, height * 5.8, 20);
  canvasSquare.fill(0);
  canvasSquare.textSize(30);
  squareImg.resize(230, 200);
  rhombusImg.resize(230,180);
  canvasSquare.textSize(37.5);
  canvasSquare.text("Choose the square you want to calculate and insert", 315, 75);
  canvasSquare.text("all valid dimensions to calculate the square.", 380, 125);
}

// Function for removing the square selector
function removeSelector()
{
  let selectors = document.querySelectorAll('.input-selector');
  selectors.forEach(selector => selector.remove());
}

// Function for removing all fields except selector
function removeAllFields() 
{
  let inputBoxes = document.querySelectorAll('.input-box');
  inputBoxes.forEach(inputBox => inputBox.remove());

  let buttons = document.querySelectorAll('.input-button');
  buttons.forEach(button => button.remove());
}

// Class for customizable input-fields
class InputField 
{
  constructor(fieldPosX, fieldPosY, readOnly = false, fieldLength = 80, fieldHeight = 30, fieldFontSize = 25) {
    this.fieldPosX = fieldPosX;
    this.fieldPosY = fieldPosY;
    this.fieldLength = fieldLength;
    this.fieldHeight = fieldHeight;
    this.fieldFontSize = fieldFontSize;
    this.readOnly = readOnly;
    this.createBox();
  }

  createBox() 
  {
    this.inputBox = createInput("");
    this.inputBox.position(this.fieldPosX, this.fieldPosY);
    this.inputBox.size(this.fieldLength, this.fieldHeight);
    this.inputBox.class('input-box');
    this.inputBox.style('font-size', `${this.fieldFontSize}px`);
    if (this.readOnly)
    {
      this.inputBox.attribute('readonly', ''); // Set input field as read-only
    }
  }

  // Method to get the input element
  input() 
  {
    return this.inputBox;
  }
}