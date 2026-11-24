SELECT
    u.unit_id,
    u.unit_name,
    COUNT(DISTINCT tu.training_id) AS training_count
FROM military_units u
JOIN training_units tu
    ON u.unit_id = tu.unit_id
JOIN trainings t
    ON tu.training_id = t.training_id
WHERE tu.training_id IN (
    SELECT training_id
    FROM training_units
    GROUP BY training_id
    HAVING COUNT(DISTINCT unit_id) > 1
)
GROUP BY u.unit_id, u.unit_name;