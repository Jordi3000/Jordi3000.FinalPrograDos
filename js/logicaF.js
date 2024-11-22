document.getElementById("cookingTest").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let score = 0; // Puntuación inicial
    let maxScore = 4; // Puntuación máxima (preguntas calificadas)
  
    // Pregunta 1
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    if (q1 === "correcto") score++;
  
    // Pregunta 2 (selección múltiple)
    const q2Elements = document.querySelectorAll('input[name="q2"]:checked');
    const q2Correct = Array.from(q2Elements).filter(input => input.value === "correcto").length;
    const q2Incorrect = Array.from(q2Elements).filter(input => input.value === "incorrecto").length;
  
    if (q2Correct === 3 && q2Incorrect === 0) score++; // Solo se suman puntos si está completamente correcta
  
    // Pregunta 3
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    if (q3 === "correcto") score++;
  
    // Pregunta 4
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    if (q4 === "correcto") score++;
  
    // Pregunta 5 (respuesta libre, no calificada)
    const q5 = document.getElementById("q5").value;
  
    // Calcular porcentaje
    const percentage = (score / maxScore) * 100;
  
    // Mostrar resultados
    alert(`
      Resultados del Test:
      - Pregunta 1: ${q1 === "correcto" ? "Correcta" : "Incorrecta"}
      - Pregunta 2: ${q2Correct === 3 && q2Incorrect === 0 ? "Correcta" : "Incorrecta"}
      - Pregunta 3: ${q3 === "correcto" ? "Correcta" : "Incorrecta"}
      - Pregunta 4: ${q4 === "correcto" ? "Correcta" : "Incorrecta"}
      - Pregunta 5 (Respuesta libre): ${q5 || "No especificado"}
  
      Tu calificación es: ${score}/${maxScore} (${percentage.toFixed(2)}%)
    `);
  });
  
  