create	table usuario(
	idUsuario int primary key auto_increment,
    nomeCompleto varchar(100),
    email varchar(100) not null,
    nomecachorro varchar(100) not null,
    senha varchar(100) not null,
    fkPorte int , constraint chkPorte foreign key(fkPorte) references portecachorro(idPorte)
);

create table portecachorro(
	idPorte int primary key auto_increment,
    porte varchar(45)
);

create table doacao(
	idDoacao int primary key auto_increment,
    nomeCachorro varchar(45) NOT NULL,
    racaCachorro varchar(45) NOT NULL,
    nomeDono varchar(45) NOT NULL,
    contato varchar(45) NOT NULL,
    imagem varchar(300)
    );
    

CREATE TABLE tarefa (
	idTarefa int primary key auto_increment,
    titulo varchar(100),
    dtAtividade date,
    descricao varchar(250),
    fkUsuario int, constraint chkUser foreign key(fkUsuario) references usuario(idUsuario),
    fkAtividade int, constraint chkAtiv foreign key(fkAtividade) references atividade(idAtividade)
);
	create table atividade (
    idAtividade int primary key auto_increment,
    nome varchar(45)
    );
    
-- FUNÇAO LISTAR

    SELECT 
    t.idTarefa,
    t.titulo,
    t.dtAtividade,
    t.descricao,
    t.fkUsuario,
    t.fkAtividade,
    a.idAtividade,
    a.nome,
    u.idUsuario 
    FROM tarefa t
	INNER JOIN atividade a 
    ON t.fkAtividade = a.idAtividade
    INNER JOIN Usuario u ON t.fkUsuario = u.idUsuario;


-- RANKING
select * from tarefa;

SELECT COUNT(tarefa.fkAtividade) as voto, atividade.nome AS 'atividade feita'
FROM tarefa JOIN atividade ON  atividade.idAtividade = tarefa.fkAtividade where fkUsuario = 22 group by tarefa.fkAtividade order by voto desc;


-- Plotagem gráfico TAREFA X ATIVIDADE
SELECT COUNT(tarefa.fkAtividade) as qtdTarefa, atividade.nome AS atividade
FROM tarefa JOIN atividade ON  atividade.idAtividade = tarefa.fkAtividade where fkUsuario = 22 group by tarefa.fkAtividade ;

    SELECT COUNT(fkAtividade) AS qtdTarefa, atividade.nome FROM tarefa
        INNER JOIN atividade ON fkAtividade = idAtividade
        INNER JOIN Usuario ON fkUsuario = idUsuario
        WHERE idUsuario = 22
    GROUP BY fkAtividade;


-- Tarefas por mÊs
SELECT MONTH(dtAtividade) AS mes, COUNT(tarefa.fkAtividade) AS quantidade
FROM tarefa join usuario on idUsuario = fkUsuario where fkUsuario = 29 group by mes ;

-- Tarefas totais feitas
    SELECT COUNT(idTarefa) AS qtdTarefa FROM tarefa
	INNER JOIN Usuario ON fkUsuario = idUsuario
	WHERE idUsuario = 29;
    
     SELECT COUNT(idTarefa) AS qtdTarefa FROM tarefa
	INNER JOIN Usuario ON fkUsuario = idUsuario
	WHERE idUsuario = 31;
    
    select * from tarefa join usuario on idUsuario = fkUsuario where idUsuario = 22;

SELECT
    t.idTarefa,
    t.titulo,
	DATE_FORMAT(dtAtividade,'%Y:%M:%d') as dtAtividade,
    t.descricao,
    t.fkUsuario,
    t.fkAtividade,
    a.idAtividade,
    a.nome,
    u.idUsuario
    FROM tarefa t
        INNER JOIN atividade a
    ON t.fkAtividade = a.idAtividade
    INNER JOIN Usuario u ON t.fkUsuario = u.idUsuario  where idUsuario = 22 order by dtAtividade;
    
    