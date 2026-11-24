SELECT
    i.instructor_id,
    i.full_name,
    COUNT(DISTINCT tu.unit_id) AS unit_count
FROM instructors i
JOIN instructor_trainings it
    ON i.instructor_id = it.instructor_id
JOIN training_units tu
    ON it.training_id = tu.training_id
GROUP BY i.instructor_id, i.full_name
HAVING COUNT(DISTINCT tu.unit_id) > 1;