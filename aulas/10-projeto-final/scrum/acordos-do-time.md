# Acordos do Time (Working Agreements)

> Estes acordos são uma **proposta**. O time pode mudar qualquer item na aula de hoje
> ou em qualquer retrospectiva. Depois de combinado, vale para todos.

## Cadência

| Evento | Quando | Duração | Quem conduz |
|--------|--------|---------|-------------|
| Sprint | 1 semana (de aula a aula) | — | — |
| Sprint Planning | Início da sprint, na aula | 45 min (a de hoje é maior) | SM |
| Daily | Todo dia; assíncrona no grupo até as **10h**, ou síncrona nos dias de aula | 15 min | SM |
| Refinamento | No meio da sprint | 30 min | PO + SM |
| Sprint Review | Fim da sprint, na aula | 30 min | Time demonstra, PO aceita |
| Retrospectiva | Logo após a review | 20 min | SM |

**Daily assíncrona**: cada pessoa posta no grupo:
```
🟢 Ontem: <o que fiz, com o nº da issue>
🔵 Hoje: <o que vou fazer>
🔴 Impedimento: <nada | descreva>
```

## Definition of Ready (DoR): quando uma história pode entrar na sprint

- [ ] Está no formato *Como / quero / para*
- [ ] Tem de 2 a 5 critérios de aceite testáveis
- [ ] Foi estimada pelo time (≤ 8 pontos)
- [ ] O time entendeu e não tem dúvidas bloqueantes
- [ ] As dependências estão resolvidas ou dentro da mesma sprint

## Definition of Done (DoD): quando uma história está pronta

- [ ] Todos os critérios de aceite atendidos
- [ ] Código no `main` via PR **revisado e aprovado por pelo menos 1 colega**
- [ ] Pelo menos 1 **feature test** cobrindo o caminho principal da história
- [ ] `php artisan test` passando no CI (GitHub Actions verde)
- [ ] Funciona rodando do zero (`docker compose up` + `migrate --seed`)
- [ ] Sem `dd()`, `console.log` ou código comentado sobrando
- [ ] O PR descreve **como a IA foi usada** (agente, prompt, o que foi aceito ou rejeitado)
- [ ] O PO validou na review

## Git e GitHub

**Branches**
```
main                              ← sempre funcionando, protegida
feature/<nº-issue>-<descricao>    ← ex.: feature/12-formulario-inscricao
fix/<nº-issue>-<descricao>        ← ex.: fix/20-validacao-cpf
```

**Commits** ([Conventional Commits](https://www.conventionalcommits.org/pt-br/)):
```
feat: formulário de inscrição (#12)
fix: validação de CPF com pontuação (#20)
test: feature test da inscrição (#12)
docs: instruções de setup no README (#3)
chore: configura GitHub Actions (#3)
```

**Pull Requests**
- Um PR por tarefa ou história; ideal com menos de 400 linhas alteradas
- A descrição tem: o que foi feito, como testar, `Closes #<nº>`, e uso de IA
- Nunca fazer merge do próprio PR sem aprovação
- Revisar os PRs dos colegas em até **24h**
- Proteção do `main`: exigir 1 aprovação + CI verde

## Convivência
- Travou por mais de 1h → pede ajuda no grupo (não é vergonha, é eficiência)
- Não vai conseguir entregar → avisa **na daily**, não no último dia
- Crítica no code review é sobre o código, nunca sobre a pessoa
- Limite de WIP: no máximo **2 cards "Fazendo" por pessoa**
