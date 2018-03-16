// Generated from QasmParser.g4 by ANTLR 4.6-SNAPSHOT



class SymbolsTable {

    qregs: string[] = [];

    cregs: string[] = [];

    gates: string[] = [];

    opaques: string[] = [];

}



import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { QasmParserListener } from './QasmParserListener';
import { QasmParserVisitor } from './QasmParserVisitor';


export class QasmParser extends Parser {
	public static readonly Comment=1;
	public static readonly WhiteSpace=2;
	public static readonly Real=3;
	public static readonly Int=4;
	public static readonly QasmDescriptor=5;
	public static readonly Include=6;
	public static readonly Qelib=7;
	public static readonly Qreg=8;
	public static readonly Creg=9;
	public static readonly Clean=10;
	public static readonly U=11;
	public static readonly Cx=12;
	public static readonly Sin=13;
	public static readonly Cos=14;
	public static readonly Tan=15;
	public static readonly Exp=16;
	public static readonly Ln=17;
	public static readonly Sqrt=18;
	public static readonly Measure=19;
	public static readonly Barrier=20;
	public static readonly Reset=21;
	public static readonly Opaque=22;
	public static readonly If=23;
	public static readonly Equals=24;
	public static readonly Assign=25;
	public static readonly Semi=26;
	public static readonly Comma=27;
	public static readonly LeftCurlyBrace=28;
	public static readonly RightCurlyBrace=29;
	public static readonly LeftBrace=30;
	public static readonly RightBrace=31;
	public static readonly LeftParen=32;
	public static readonly RightParen=33;
	public static readonly Pow=34;
	public static readonly Mult=35;
	public static readonly Div=36;
	public static readonly Sum=37;
	public static readonly Subs=38;
	public static readonly Pi=39;
	public static readonly Gate=40;
	public static readonly Id=41;
	public static readonly RULE_code = 0;
	public static readonly RULE_headers = 1;
	public static readonly RULE_sentences = 2;
	public static readonly RULE_clean = 3;
	public static readonly RULE_sentence = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_conditional = 7;
	public static readonly RULE_qLine = 8;
	public static readonly RULE_gateDefinition = 9;
	public static readonly RULE_opaqueDefinition = 10;
	public static readonly RULE_gateDefinitionArguments = 11;
	public static readonly RULE_opaqueDefinitionArguments = 12;
	public static readonly RULE_paramsList = 13;
	public static readonly RULE_body = 14;
	public static readonly RULE_bodyExpression = 15;
	public static readonly RULE_paramsListBody = 16;
	public static readonly RULE_exp = 17;
	public static readonly RULE_unaryOp = 18;
	public static readonly RULE_measure = 19;
	public static readonly RULE_qubit = 20;
	public static readonly RULE_cbit = 21;
	public static readonly RULE_customArglist = 22;
	public static readonly RULE_paramsListNumber = 23;
	public static readonly RULE_qubitAndQregList = 24;
	public static readonly RULE_qbitOrQreg = 25;
	public static readonly RULE_cxGate = 26;
	public static readonly RULE_barrierGate = 27;
	public static readonly RULE_qubitList = 28;
	public static readonly RULE_resetGate = 29;
	public static readonly ruleNames: string[] = [
		"code", "headers", "sentences", "clean", "sentence", "definition", "expression", 
		"conditional", "qLine", "gateDefinition", "opaqueDefinition", "gateDefinitionArguments", 
		"opaqueDefinitionArguments", "paramsList", "body", "bodyExpression", "paramsListBody", 
		"exp", "unaryOp", "measure", "qubit", "cbit", "customArglist", "paramsListNumber", 
		"qubitAndQregList", "qbitOrQreg", "cxGate", "barrierGate", "qubitList", 
		"resetGate"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'include \"quelib1.inc\";'", 
		"'QELIB.INC'", "'qreg'", "'creg'", "'clean'", "'U'", "'CX'", "'sin'", 
		"'cos'", "'tan'", "'exp'", "'ln'", "'sqrt'", "'measure'", "'barrier'", 
		"'reset'", "'opaque'", "'if'", "'=='", "'->'", "';'", "','", "'{'", "'}'", 
		"'['", "']'", "'('", "')'", "'^'", "'*'", "'/'", "'+'", "'-'", "'pi'", 
		"'gate'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "Comment", "WhiteSpace", "Real", "Int", "QasmDescriptor", "Include", 
		"Qelib", "Qreg", "Creg", "Clean", "U", "Cx", "Sin", "Cos", "Tan", "Exp", 
		"Ln", "Sqrt", "Measure", "Barrier", "Reset", "Opaque", "If", "Equals", 
		"Assign", "Semi", "Comma", "LeftCurlyBrace", "RightCurlyBrace", "LeftBrace", 
		"RightBrace", "LeftParen", "RightParen", "Pow", "Mult", "Div", "Sum", 
		"Subs", "Pi", "Gate", "Id"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QasmParser._LITERAL_NAMES, QasmParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return QasmParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "QasmParser.g4"; }

	@Override
	public get ruleNames(): string[] { return QasmParser.ruleNames; }

	@Override
	public get serializedATN(): string { return QasmParser._serializedATN; }


	    
	private symbolsTable = new SymbolsTable();

	private declareCreg(input: Token): void {
	    this.symbolsTable.cregs.push(input.text);
	}

	private declareQreg(input: Token): void {
	    this.symbolsTable.qregs.push(input.text);
	}

	private declareGate(input: Token): void {
	    this.symbolsTable.gates.push(input.text);
	}

	private declareOpaque(input: Token): void {
	    this.symbolsTable.opaques.push(input.text);
	}

	private verifyQregDeclaration(input: Token): void {
	    if (this.symbolsTable.qregs.indexOf(input.text) === -1) {
	        let message = 'Qubit ' + input.text + ' is not previously defined.';
	        this.notifyErrorListeners(message, input, null);
	    }
	}

	private verifyCregDeclaration(input: Token): void {
	    if (this.symbolsTable.cregs.indexOf(input.text) === -1) {
	        let message = 'Cbit ' + input.text + ' is not previously defined.';
	        this.notifyErrorListeners(message, input, null);
	    }
	}

	private verifyGateDeclaration(input: Token): void {
	    if (this.symbolsTable.gates.indexOf(input.text) === -1) {
	        let message = 'Gate ' + input.text + ' is not previously defined.';
	        this.notifyErrorListeners(message, input, null);
	    }
	}

	declaredVariables(): string[] {
	    let result = [];
	    
	    result.push(...this.symbolsTable.qregs);
	    result.push(...this.symbolsTable.cregs);
	    result.push(...this.symbolsTable.gates);
	    result.push(...this.symbolsTable.opaques);

	    return result;
	}


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(QasmParser._ATN, this);
	}
	@RuleVersion(0)
	public code(): CodeContext {
		let _localctx: CodeContext = new CodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, QasmParser.RULE_code);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.EOF:
			case QasmParser.Qreg:
			case QasmParser.Creg:
			case QasmParser.Cx:
			case QasmParser.Measure:
			case QasmParser.Barrier:
			case QasmParser.Reset:
			case QasmParser.Opaque:
			case QasmParser.If:
			case QasmParser.Gate:
			case QasmParser.Id:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.sentences();
				}
				break;
			case QasmParser.QasmDescriptor:
			case QasmParser.Include:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.headers();
				this.state = 62;
				this.sentences();
				}
				break;
			case QasmParser.Clean:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.clean();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public headers(): HeadersContext {
		let _localctx: HeadersContext = new HeadersContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QasmParser.RULE_headers);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.match(QasmParser.QasmDescriptor);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				this.match(QasmParser.QasmDescriptor);
				this.state = 69;
				this.match(QasmParser.Include);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.match(QasmParser.Include);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sentences(): SentencesContext {
		let _localctx: SentencesContext = new SentencesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, QasmParser.RULE_sentences);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.sentence();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.sentence();
				this.state = 75;
				this.sentences();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clean(): CleanContext {
		let _localctx: CleanContext = new CleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, QasmParser.RULE_clean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(QasmParser.Clean);
			this.state = 80;
			this.match(QasmParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, QasmParser.RULE_sentence);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.Qreg:
			case QasmParser.Creg:
			case QasmParser.Opaque:
			case QasmParser.Gate:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.definition();
				}
				break;
			case QasmParser.Cx:
			case QasmParser.Measure:
			case QasmParser.Barrier:
			case QasmParser.Reset:
			case QasmParser.Id:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.expression();
				}
				break;
			case QasmParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 84;
				this.conditional();
				this.state = 85;
				this.expression();
				}
				break;
			case QasmParser.EOF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 87;
				this.match(QasmParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, QasmParser.RULE_definition);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.Qreg:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.match(QasmParser.Qreg);
				this.state = 91;
				_localctx._Id = this.match(QasmParser.Id);
				 this.declareQreg(_localctx._Id); 
				this.state = 93;
				this.qLine();
				this.state = 94;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Creg:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.match(QasmParser.Creg);
				this.state = 97;
				_localctx._Id = this.match(QasmParser.Id);
				 this.declareCreg(_localctx._Id); 
				this.state = 99;
				this.qLine();
				this.state = 100;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Gate:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 102;
				this.gateDefinition();
				}
				break;
			case QasmParser.Opaque:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.opaqueDefinition();
				this.state = 104;
				this.match(QasmParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, QasmParser.RULE_expression);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.Measure:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.measure();
				this.state = 109;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Id:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.customArglist();
				this.state = 112;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Cx:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.cxGate();
				this.state = 115;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Barrier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				this.barrierGate();
				this.state = 118;
				this.match(QasmParser.Semi);
				}
				break;
			case QasmParser.Reset:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 120;
				this.resetGate();
				this.state = 121;
				this.match(QasmParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, QasmParser.RULE_conditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(QasmParser.If);
			this.state = 126;
			this.match(QasmParser.LeftParen);
			this.state = 127;
			this.match(QasmParser.Id);
			this.state = 128;
			this.match(QasmParser.Equals);
			this.state = 129;
			this.match(QasmParser.Int);
			this.state = 130;
			this.match(QasmParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qLine(): QLineContext {
		let _localctx: QLineContext = new QLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, QasmParser.RULE_qLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(QasmParser.LeftBrace);
			this.state = 133;
			this.match(QasmParser.Int);
			this.state = 134;
			this.match(QasmParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gateDefinition(): GateDefinitionContext {
		let _localctx: GateDefinitionContext = new GateDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QasmParser.RULE_gateDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(QasmParser.Gate);
			this.state = 137;
			_localctx._Id = this.match(QasmParser.Id);
			 this.declareGate(_localctx._Id); 
			this.state = 139;
			this.gateDefinitionArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public opaqueDefinition(): OpaqueDefinitionContext {
		let _localctx: OpaqueDefinitionContext = new OpaqueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, QasmParser.RULE_opaqueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(QasmParser.Opaque);
			this.state = 142;
			_localctx._Id = this.match(QasmParser.Id);
			 this.declareOpaque(_localctx._Id); 
			this.state = 144;
			this.opaqueDefinitionArguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gateDefinitionArguments(): GateDefinitionArgumentsContext {
		let _localctx: GateDefinitionArgumentsContext = new GateDefinitionArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, QasmParser.RULE_gateDefinitionArguments);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.paramsList();
				this.state = 147;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 148;
				this.body();
				this.state = 149;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 151;
				this.match(QasmParser.LeftParen);
				this.state = 152;
				this.paramsList();
				this.state = 153;
				this.match(QasmParser.RightParen);
				this.state = 154;
				this.paramsList();
				this.state = 155;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 156;
				this.body();
				this.state = 157;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
				this.match(QasmParser.LeftParen);
				this.state = 160;
				this.paramsList();
				this.state = 161;
				this.match(QasmParser.RightParen);
				this.state = 162;
				this.paramsList();
				this.state = 163;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 164;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 166;
				this.match(QasmParser.LeftParen);
				this.state = 167;
				this.match(QasmParser.RightParen);
				this.state = 168;
				this.paramsList();
				this.state = 169;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 170;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.match(QasmParser.LeftParen);
				this.state = 173;
				this.match(QasmParser.RightParen);
				this.state = 174;
				this.paramsList();
				this.state = 175;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 176;
				this.body();
				this.state = 177;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 179;
				this.paramsList();
				this.state = 180;
				this.match(QasmParser.LeftCurlyBrace);
				this.state = 181;
				this.match(QasmParser.RightCurlyBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public opaqueDefinitionArguments(): OpaqueDefinitionArgumentsContext {
		let _localctx: OpaqueDefinitionArgumentsContext = new OpaqueDefinitionArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, QasmParser.RULE_opaqueDefinitionArguments);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.Id:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.paramsList();
				}
				break;
			case QasmParser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.match(QasmParser.LeftParen);
				this.state = 187;
				this.paramsList();
				this.state = 188;
				this.match(QasmParser.RightParen);
				this.state = 189;
				this.paramsList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public paramsList(): ParamsListContext {
		let _localctx: ParamsListContext = new ParamsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, QasmParser.RULE_paramsList);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.match(QasmParser.Id);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.match(QasmParser.Id);
				this.state = 195;
				this.match(QasmParser.Comma);
				this.state = 196;
				this.paramsList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, QasmParser.RULE_body);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.bodyExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.bodyExpression();
				this.state = 201;
				this.body();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public bodyExpression(): BodyExpressionContext {
		let _localctx: BodyExpressionContext = new BodyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, QasmParser.RULE_bodyExpression);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(QasmParser.Cx);
				this.state = 206;
				this.paramsList();
				this.state = 207;
				this.match(QasmParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.match(QasmParser.U);
				this.state = 210;
				this.match(QasmParser.LeftParen);
				this.state = 211;
				this.paramsListBody(0);
				this.state = 212;
				this.match(QasmParser.RightParen);
				this.state = 213;
				this.paramsList();
				this.state = 214;
				this.match(QasmParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 216;
				this.match(QasmParser.Id);
				this.state = 217;
				this.paramsList();
				this.state = 218;
				this.match(QasmParser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 220;
				this.match(QasmParser.Id);
				this.state = 221;
				this.match(QasmParser.LeftParen);
				this.state = 222;
				this.paramsListBody(0);
				this.state = 223;
				this.match(QasmParser.RightParen);
				this.state = 224;
				this.paramsList();
				this.state = 225;
				this.match(QasmParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public paramsListBody(): ParamsListBodyContext;
	public paramsListBody(_p: number): ParamsListBodyContext;
	@RuleVersion(0)
	public paramsListBody(_p?: number): ParamsListBodyContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParamsListBodyContext = new ParamsListBodyContext(this._ctx, _parentState);
		let _prevctx: ParamsListBodyContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, QasmParser.RULE_paramsListBody, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 230;
			this.exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ParamsListBodyContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_paramsListBody);
					this.state = 232;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 233;
					this.match(QasmParser.Comma);
					this.state = 234;
					this.exp(0);
					}
					} 
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	@RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, QasmParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QasmParser.Int:
				{
				this.state = 241;
				this.match(QasmParser.Int);
				}
				break;
			case QasmParser.Real:
				{
				this.state = 242;
				this.match(QasmParser.Real);
				}
				break;
			case QasmParser.Pi:
				{
				this.state = 243;
				this.match(QasmParser.Pi);
				}
				break;
			case QasmParser.Id:
				{
				this.state = 244;
				this.match(QasmParser.Id);
				}
				break;
			case QasmParser.Sin:
			case QasmParser.Cos:
			case QasmParser.Tan:
			case QasmParser.Exp:
			case QasmParser.Ln:
			case QasmParser.Sqrt:
				{
				this.state = 245;
				this.unaryOp();
				this.state = 246;
				this.match(QasmParser.LeftParen);
				this.state = 247;
				this.exp(0);
				this.state = 248;
				this.match(QasmParser.RightParen);
				}
				break;
			case QasmParser.Subs:
				{
				this.state = 250;
				this.match(QasmParser.Subs);
				this.state = 251;
				this.exp(7);
				}
				break;
			case QasmParser.LeftParen:
				{
				this.state = 252;
				this.match(QasmParser.LeftParen);
				this.state = 253;
				this.exp(0);
				this.state = 254;
				this.match(QasmParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 275;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 273;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_exp);
						this.state = 258;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 259;
						this.match(QasmParser.Sum);
						this.state = 260;
						this.exp(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_exp);
						this.state = 261;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 262;
						this.match(QasmParser.Subs);
						this.state = 263;
						this.exp(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_exp);
						this.state = 264;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 265;
						this.match(QasmParser.Mult);
						this.state = 266;
						this.exp(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_exp);
						this.state = 267;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 268;
						this.match(QasmParser.Div);
						this.state = 269;
						this.exp(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_exp);
						this.state = 270;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 271;
						this.match(QasmParser.Pow);
						this.state = 272;
						this.exp(2);
						}
						break;
					}
					} 
				}
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unaryOp(): UnaryOpContext {
		let _localctx: UnaryOpContext = new UnaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, QasmParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QasmParser.Sin) | (1 << QasmParser.Cos) | (1 << QasmParser.Tan) | (1 << QasmParser.Exp) | (1 << QasmParser.Ln) | (1 << QasmParser.Sqrt))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public measure(): MeasureContext {
		let _localctx: MeasureContext = new MeasureContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, QasmParser.RULE_measure);
		try {
			this.state = 290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 280;
				this.match(QasmParser.Measure);
				this.state = 281;
				this.qubit();
				this.state = 282;
				this.match(QasmParser.Assign);
				this.state = 283;
				this.cbit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this.match(QasmParser.Measure);
				this.state = 286;
				_localctx._q = this.match(QasmParser.Id);
				this.state = 287;
				this.match(QasmParser.Assign);
				this.state = 288;
				_localctx._c = this.match(QasmParser.Id);

				        this.verifyQregDeclaration(_localctx._q);
				        this.verifyCregDeclaration(_localctx._c);
				    
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qubit(): QubitContext {
		let _localctx: QubitContext = new QubitContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, QasmParser.RULE_qubit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			_localctx._Id = this.match(QasmParser.Id);
			 this.verifyQregDeclaration(_localctx._Id); 
			this.state = 294;
			this.qLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cbit(): CbitContext {
		let _localctx: CbitContext = new CbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, QasmParser.RULE_cbit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			_localctx._Id = this.match(QasmParser.Id);
			 this.verifyCregDeclaration(_localctx._Id); 
			this.state = 298;
			this.qLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public customArglist(): CustomArglistContext {
		let _localctx: CustomArglistContext = new CustomArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, QasmParser.RULE_customArglist);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				_localctx._Id = this.match(QasmParser.Id);
				this.verifyGateDeclaration(_localctx._Id); 
				this.state = 302;
				this.match(QasmParser.LeftParen);
				this.state = 303;
				this.paramsListNumber(0);
				this.state = 304;
				this.match(QasmParser.RightParen);
				this.state = 305;
				this.qubitAndQregList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 307;
				_localctx._Id = this.match(QasmParser.Id);
				this.verifyGateDeclaration(_localctx._Id); 
				this.state = 309;
				this.qubitAndQregList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public paramsListNumber(): ParamsListNumberContext;
	public paramsListNumber(_p: number): ParamsListNumberContext;
	@RuleVersion(0)
	public paramsListNumber(_p?: number): ParamsListNumberContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParamsListNumberContext = new ParamsListNumberContext(this._ctx, _parentState);
		let _prevctx: ParamsListNumberContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, QasmParser.RULE_paramsListNumber, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 313;
			this.exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ParamsListNumberContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, QasmParser.RULE_paramsListNumber);
					this.state = 315;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 316;
					this.match(QasmParser.Comma);
					this.state = 317;
					this.exp(0);
					}
					} 
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qubitAndQregList(): QubitAndQregListContext {
		let _localctx: QubitAndQregListContext = new QubitAndQregListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, QasmParser.RULE_qubitAndQregList);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.qbitOrQreg();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
				this.qbitOrQreg();
				this.state = 325;
				this.match(QasmParser.Comma);
				this.state = 326;
				this.qubitAndQregList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qbitOrQreg(): QbitOrQregContext {
		let _localctx: QbitOrQregContext = new QbitOrQregContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, QasmParser.RULE_qbitOrQreg);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				_localctx._Id = this.match(QasmParser.Id);
				 this.verifyQregDeclaration(_localctx._Id); 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 332;
				_localctx._Id = this.match(QasmParser.Id);
				 this.verifyQregDeclaration(_localctx._Id); 
				this.state = 334;
				this.qLine();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cxGate(): CxGateContext {
		let _localctx: CxGateContext = new CxGateContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, QasmParser.RULE_cxGate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(QasmParser.Cx);
			this.state = 338;
			this.qubitAndQregList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public barrierGate(): BarrierGateContext {
		let _localctx: BarrierGateContext = new BarrierGateContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, QasmParser.RULE_barrierGate);
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.match(QasmParser.Barrier);
				this.state = 341;
				_localctx._Id = this.match(QasmParser.Id);
				 this.verifyQregDeclaration(_localctx._Id); 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(QasmParser.Barrier);
				this.state = 344;
				this.qubitList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qubitList(): QubitListContext {
		let _localctx: QubitListContext = new QubitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, QasmParser.RULE_qubitList);
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,21,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.qubit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.qubit();
				this.state = 349;
				this.match(QasmParser.Comma);
				this.state = 350;
				this.qubitList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public resetGate(): ResetGateContext {
		let _localctx: ResetGateContext = new ResetGateContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, QasmParser.RULE_resetGate);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.match(QasmParser.Reset);
				this.state = 355;
				_localctx._Id = this.match(QasmParser.Id);
				 this.verifyQregDeclaration(_localctx._Id); 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(QasmParser.Reset);
				this.state = 358;
				this.qubit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.paramsListBody_sempred(_localctx as ParamsListBodyContext, predIndex);

		case 17:
			return this.exp_sempred(_localctx as ExpContext, predIndex);

		case 23:
			return this.paramsListNumber_sempred(_localctx as ParamsListNumberContext, predIndex);
		}
		return true;
	}
	private paramsListBody_sempred(_localctx: ParamsListBodyContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private paramsListNumber_sempred(_localctx: ParamsListNumberContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03+\u016C\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x03\x02"+
		"\x03\x02\x05\x02D\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04P\n\x04\x03\x05\x03\x05\x03\x05"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06[\n\x06\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07m\n\x07\x03\b"+
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03"+
		"\b\x03\b\x03\b\x05\b~\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03"+
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x05\r\xBA\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x05\x0E\xC2\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC8\n\x0F"+
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xCE\n\x10\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x05\x11\xE6\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12"+
		"\x03\x12\x07\x12\xEE\n\x12\f\x12\x0E\x12\xF1\v\x12\x03\x13\x03\x13\x03"+
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03"+
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0103\n\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0114\n\x13\f\x13\x0E\x13\u0117"+
		"\v\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0125\n\x15\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03"+
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0139\n\x18"+
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0141\n\x19\f"+
		"\x19\x0E\x19\u0144\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A"+
		"\u014B\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0152\n\x1B"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D"+
		"\u015C\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0163\n\x1E"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u016A\n\x1F\x03\x1F\x02"+
		"\x02\x05\"$0 \x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02"+
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02"+
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\x03\x03"+
		"\x02\x0F\x14\u017B\x02C\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06O\x03"+
		"\x02\x02\x02\bQ\x03\x02\x02\x02\nZ\x03\x02\x02\x02\fl\x03\x02\x02\x02"+
		"\x0E}\x03\x02\x02\x02\x10\x7F\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02"+
		"\x14\x8A\x03\x02\x02\x02\x16\x8F\x03\x02\x02\x02\x18\xB9\x03\x02\x02\x02"+
		"\x1A\xC1\x03\x02\x02\x02\x1C\xC7\x03\x02\x02\x02\x1E\xCD\x03\x02\x02\x02"+
		" \xE5\x03\x02\x02\x02\"\xE7\x03\x02\x02\x02$\u0102\x03\x02\x02\x02&\u0118"+
		"\x03\x02\x02\x02(\u0124\x03\x02\x02\x02*\u0126\x03\x02\x02\x02,\u012A"+
		"\x03\x02\x02\x02.\u0138\x03\x02\x02\x020\u013A\x03\x02\x02\x022\u014A"+
		"\x03\x02\x02\x024\u0151\x03\x02\x02\x026\u0153\x03\x02\x02\x028\u015B"+
		"\x03\x02\x02\x02:\u0162\x03\x02\x02\x02<\u0169\x03\x02\x02\x02>D\x05\x06"+
		"\x04\x02?@\x05\x04\x03\x02@A\x05\x06\x04\x02AD\x03\x02\x02\x02BD\x05\b"+
		"\x05\x02C>\x03\x02\x02\x02C?\x03\x02\x02\x02CB\x03\x02\x02\x02D\x03\x03"+
		"\x02\x02\x02EJ\x07\x07\x02\x02FG\x07\x07\x02\x02GJ\x07\b\x02\x02HJ\x07"+
		"\b\x02\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IH\x03\x02\x02\x02J\x05"+
		"\x03\x02\x02\x02KP\x05\n\x06\x02LM\x05\n\x06\x02MN\x05\x06\x04\x02NP\x03"+
		"\x02\x02\x02OK\x03\x02\x02\x02OL\x03\x02\x02\x02P\x07\x03\x02\x02\x02"+
		"QR\x07\f\x02\x02RS\x07\x02\x02\x03S\t\x03\x02\x02\x02T[\x05\f\x07\x02"+
		"U[\x05\x0E\b\x02VW\x05\x10\t\x02WX\x05\x0E\b\x02X[\x03\x02\x02\x02Y[\x07"+
		"\x02\x02\x03ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02ZV\x03\x02\x02\x02ZY\x03"+
		"\x02\x02\x02[\v\x03\x02\x02\x02\\]\x07\n\x02\x02]^\x07+\x02\x02^_\b\x07"+
		"\x01\x02_`\x05\x12\n\x02`a\x07\x1C\x02\x02am\x03\x02\x02\x02bc\x07\v\x02"+
		"\x02cd\x07+\x02\x02de\b\x07\x01\x02ef\x05\x12\n\x02fg\x07\x1C\x02\x02"+
		"gm\x03\x02\x02\x02hm\x05\x14\v\x02ij\x05\x16\f\x02jk\x07\x1C\x02\x02k"+
		"m\x03\x02\x02\x02l\\\x03\x02\x02\x02lb\x03\x02\x02\x02lh\x03\x02\x02\x02"+
		"li\x03\x02\x02\x02m\r\x03\x02\x02\x02no\x05(\x15\x02op\x07\x1C\x02\x02"+
		"p~\x03\x02\x02\x02qr\x05.\x18\x02rs\x07\x1C\x02\x02s~\x03\x02\x02\x02"+
		"tu\x056\x1C\x02uv\x07\x1C\x02\x02v~\x03\x02\x02\x02wx\x058\x1D\x02xy\x07"+
		"\x1C\x02\x02y~\x03\x02\x02\x02z{\x05<\x1F\x02{|\x07\x1C\x02\x02|~\x03"+
		"\x02\x02\x02}n\x03\x02\x02\x02}q\x03\x02\x02\x02}t\x03\x02\x02\x02}w\x03"+
		"\x02\x02\x02}z\x03\x02\x02\x02~\x0F\x03\x02\x02\x02\x7F\x80\x07\x19\x02"+
		"\x02\x80\x81\x07\"\x02\x02\x81\x82\x07+\x02\x02\x82\x83\x07\x1A\x02\x02"+
		"\x83\x84\x07\x06\x02\x02\x84\x85\x07#\x02\x02\x85\x11\x03\x02\x02\x02"+
		"\x86\x87\x07 \x02\x02\x87\x88\x07\x06\x02\x02\x88\x89\x07!\x02\x02\x89"+
		"\x13\x03\x02\x02\x02\x8A\x8B\x07*\x02\x02\x8B\x8C\x07+\x02\x02\x8C\x8D"+
		"\b\v\x01\x02\x8D\x8E\x05\x18\r\x02\x8E\x15\x03\x02\x02\x02\x8F\x90\x07"+
		"\x18\x02\x02\x90\x91\x07+\x02\x02\x91\x92\b\f\x01\x02\x92\x93\x05\x1A"+
		"\x0E\x02\x93\x17\x03\x02\x02\x02\x94\x95\x05\x1C\x0F\x02\x95\x96\x07\x1E"+
		"\x02\x02\x96\x97\x05\x1E\x10\x02\x97\x98\x07\x1F\x02\x02\x98\xBA\x03\x02"+
		"\x02\x02\x99\x9A\x07\"\x02\x02\x9A\x9B\x05\x1C\x0F\x02\x9B\x9C\x07#\x02"+
		"\x02\x9C\x9D\x05\x1C\x0F\x02\x9D\x9E\x07\x1E\x02\x02\x9E\x9F\x05\x1E\x10"+
		"\x02\x9F\xA0\x07\x1F\x02\x02\xA0\xBA\x03\x02\x02\x02\xA1\xA2\x07\"\x02"+
		"\x02\xA2\xA3\x05\x1C\x0F\x02\xA3\xA4\x07#\x02\x02\xA4\xA5\x05\x1C\x0F"+
		"\x02\xA5\xA6\x07\x1E\x02\x02\xA6\xA7\x07\x1F\x02\x02\xA7\xBA\x03\x02\x02"+
		"\x02\xA8\xA9\x07\"\x02\x02\xA9\xAA\x07#\x02\x02\xAA\xAB\x05\x1C\x0F\x02"+
		"\xAB\xAC\x07\x1E\x02\x02\xAC\xAD\x07\x1F\x02\x02\xAD\xBA\x03\x02\x02\x02"+
		"\xAE\xAF\x07\"\x02\x02\xAF\xB0\x07#\x02\x02\xB0\xB1\x05\x1C\x0F\x02\xB1"+
		"\xB2\x07\x1E\x02\x02\xB2\xB3\x05\x1E\x10\x02\xB3\xB4\x07\x1F\x02\x02\xB4"+
		"\xBA\x03\x02\x02\x02\xB5\xB6\x05\x1C\x0F\x02\xB6\xB7\x07\x1E\x02\x02\xB7"+
		"\xB8\x07\x1F\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\x94\x03\x02\x02\x02\xB9"+
		"\x99\x03\x02\x02\x02\xB9\xA1\x03\x02\x02\x02\xB9\xA8\x03\x02\x02\x02\xB9"+
		"\xAE\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xBA\x19\x03\x02\x02\x02\xBB"+
		"\xC2\x05\x1C\x0F\x02\xBC\xBD\x07\"\x02\x02\xBD\xBE\x05\x1C\x0F\x02\xBE"+
		"\xBF\x07#\x02\x02\xBF\xC0\x05\x1C\x0F\x02\xC0\xC2\x03\x02\x02\x02\xC1"+
		"\xBB\x03\x02\x02\x02\xC1\xBC\x03\x02\x02\x02\xC2\x1B\x03\x02\x02\x02\xC3"+
		"\xC8\x07+\x02\x02\xC4\xC5\x07+\x02\x02\xC5\xC6\x07\x1D\x02\x02\xC6\xC8"+
		"\x05\x1C\x0F\x02\xC7\xC3\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02\xC8\x1D"+
		"\x03\x02\x02\x02\xC9\xCE\x05 \x11\x02\xCA\xCB\x05 \x11\x02\xCB\xCC\x05"+
		"\x1E\x10\x02\xCC\xCE\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCD\xCA\x03"+
		"\x02\x02\x02\xCE\x1F\x03\x02\x02\x02\xCF\xD0\x07\x0E\x02\x02\xD0\xD1\x05"+
		"\x1C\x0F\x02\xD1\xD2\x07\x1C\x02\x02\xD2\xE6\x03\x02\x02\x02\xD3\xD4\x07"+
		"\r\x02\x02\xD4\xD5\x07\"\x02\x02\xD5\xD6\x05\"\x12\x02\xD6\xD7\x07#\x02"+
		"\x02\xD7\xD8\x05\x1C\x0F\x02\xD8\xD9\x07\x1C\x02\x02\xD9\xE6\x03\x02\x02"+
		"\x02\xDA\xDB\x07+\x02\x02\xDB\xDC\x05\x1C\x0F\x02\xDC\xDD\x07\x1C\x02"+
		"\x02\xDD\xE6\x03\x02\x02\x02\xDE\xDF\x07+\x02\x02\xDF\xE0\x07\"\x02\x02"+
		"\xE0\xE1\x05\"\x12\x02\xE1\xE2\x07#\x02\x02\xE2\xE3\x05\x1C\x0F\x02\xE3"+
		"\xE4\x07\x1C\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xCF\x03\x02\x02\x02\xE5"+
		"\xD3\x03\x02\x02\x02\xE5\xDA\x03\x02\x02\x02\xE5\xDE\x03\x02\x02\x02\xE6"+
		"!\x03\x02\x02\x02\xE7\xE8\b\x12\x01\x02\xE8\xE9\x05$\x13\x02\xE9\xEF\x03"+
		"\x02\x02\x02\xEA\xEB\f\x03\x02\x02\xEB\xEC\x07\x1D\x02\x02\xEC\xEE\x05"+
		"$\x13\x02\xED\xEA\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03"+
		"\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0#\x03\x02\x02\x02\xF1\xEF\x03"+
		"\x02\x02\x02\xF2\xF3\b\x13\x01\x02\xF3\u0103\x07\x06\x02\x02\xF4\u0103"+
		"\x07\x05\x02\x02\xF5\u0103\x07)\x02\x02\xF6\u0103\x07+\x02\x02\xF7\xF8"+
		"\x05&\x14\x02\xF8\xF9\x07\"\x02\x02\xF9\xFA\x05$\x13\x02\xFA\xFB\x07#"+
		"\x02\x02\xFB\u0103\x03\x02\x02\x02\xFC\xFD\x07(\x02\x02\xFD\u0103\x05"+
		"$\x13\t\xFE\xFF\x07\"\x02\x02\xFF\u0100\x05$\x13\x02\u0100\u0101\x07#"+
		"\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\xF2\x03\x02\x02\x02\u0102\xF4"+
		"\x03\x02\x02\x02\u0102\xF5\x03\x02\x02\x02\u0102\xF6\x03\x02\x02\x02\u0102"+
		"\xF7\x03\x02\x02\x02\u0102\xFC\x03\x02\x02\x02\u0102\xFE\x03\x02\x02\x02"+
		"\u0103\u0115\x03\x02\x02\x02\u0104\u0105\f\x07\x02\x02\u0105\u0106\x07"+
		"\'\x02\x02\u0106\u0114\x05$\x13\b\u0107\u0108\f\x06\x02\x02\u0108\u0109"+
		"\x07(\x02\x02\u0109\u0114\x05$\x13\x07\u010A\u010B\f\x05\x02\x02\u010B"+
		"\u010C\x07%\x02\x02\u010C\u0114\x05$\x13\x06\u010D\u010E\f\x04\x02\x02"+
		"\u010E\u010F\x07&\x02\x02\u010F\u0114\x05$\x13\x05\u0110\u0111\f\x03\x02"+
		"\x02\u0111\u0112\x07$\x02\x02\u0112\u0114\x05$\x13\x04\u0113\u0104\x03"+
		"\x02\x02\x02\u0113\u0107\x03\x02\x02\x02\u0113\u010A\x03\x02\x02\x02\u0113"+
		"\u010D\x03\x02\x02\x02\u0113\u0110\x03\x02\x02\x02\u0114\u0117\x03\x02"+
		"\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116"+
		"%\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119\t\x02\x02\x02"+
		"\u0119\'\x03\x02\x02\x02\u011A\u011B\x07\x15\x02\x02\u011B\u011C\x05*"+
		"\x16\x02\u011C\u011D\x07\x1B\x02\x02\u011D\u011E\x05,\x17\x02\u011E\u0125"+
		"\x03\x02\x02\x02\u011F\u0120\x07\x15\x02\x02\u0120\u0121\x07+\x02\x02"+
		"\u0121\u0122\x07\x1B\x02\x02\u0122\u0123\x07+\x02\x02\u0123\u0125\b\x15"+
		"\x01\x02\u0124\u011A\x03\x02\x02\x02\u0124\u011F\x03\x02\x02\x02\u0125"+
		")\x03\x02\x02\x02\u0126\u0127\x07+\x02\x02\u0127\u0128\b\x16\x01\x02\u0128"+
		"\u0129\x05\x12\n\x02\u0129+\x03\x02\x02\x02\u012A\u012B\x07+\x02\x02\u012B"+
		"\u012C\b\x17\x01\x02\u012C\u012D\x05\x12\n\x02\u012D-\x03\x02\x02\x02"+
		"\u012E\u012F\x07+\x02\x02\u012F\u0130\b\x18\x01\x02\u0130\u0131\x07\""+
		"\x02\x02\u0131\u0132\x050\x19\x02\u0132\u0133\x07#\x02\x02\u0133\u0134"+
		"\x052\x1A\x02\u0134\u0139\x03\x02\x02\x02\u0135\u0136\x07+\x02\x02\u0136"+
		"\u0137\b\x18\x01\x02\u0137\u0139\x052\x1A\x02\u0138\u012E\x03\x02\x02"+
		"\x02\u0138\u0135\x03\x02\x02\x02\u0139/\x03\x02\x02\x02\u013A\u013B\b"+
		"\x19\x01\x02\u013B\u013C\x05$\x13\x02\u013C\u0142\x03\x02\x02\x02\u013D"+
		"\u013E\f\x03\x02\x02\u013E\u013F\x07\x1D\x02\x02\u013F\u0141\x05$\x13"+
		"\x02\u0140\u013D\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140"+
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u01431\x03\x02\x02\x02\u0144"+
		"\u0142\x03\x02\x02\x02\u0145\u014B\x054\x1B\x02\u0146\u0147\x054\x1B\x02"+
		"\u0147\u0148\x07\x1D\x02\x02\u0148\u0149\x052\x1A\x02\u0149\u014B\x03"+
		"\x02\x02\x02\u014A\u0145\x03\x02\x02\x02\u014A\u0146\x03\x02\x02\x02\u014B"+
		"3\x03\x02\x02\x02\u014C\u014D\x07+\x02\x02\u014D\u0152\b\x1B\x01\x02\u014E"+
		"\u014F\x07+\x02\x02\u014F\u0150\b\x1B\x01\x02\u0150\u0152\x05\x12\n\x02"+
		"\u0151\u014C\x03\x02\x02\x02\u0151\u014E\x03\x02\x02\x02\u01525\x03\x02"+
		"\x02\x02\u0153\u0154\x07\x0E\x02\x02\u0154\u0155\x052\x1A\x02\u01557\x03"+
		"\x02\x02\x02\u0156\u0157\x07\x16\x02\x02\u0157\u0158\x07+\x02\x02\u0158"+
		"\u015C\b\x1D\x01\x02\u0159\u015A\x07\x16\x02\x02\u015A\u015C\x05:\x1E"+
		"\x02\u015B\u0156\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C9\x03"+
		"\x02\x02\x02\u015D\u0163\x05*\x16\x02\u015E\u015F\x05*\x16\x02\u015F\u0160"+
		"\x07\x1D\x02\x02\u0160\u0161\x05:\x1E\x02\u0161\u0163\x03\x02\x02\x02"+
		"\u0162\u015D\x03\x02\x02\x02\u0162\u015E\x03\x02\x02\x02\u0163;\x03\x02"+
		"\x02\x02\u0164\u0165\x07\x17\x02\x02\u0165\u0166\x07+\x02\x02\u0166\u016A"+
		"\b\x1F\x01\x02\u0167\u0168\x07\x17\x02\x02\u0168\u016A\x05*\x16\x02\u0169"+
		"\u0164\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A=\x03\x02\x02"+
		"\x02\x19CIOZl}\xB9\xC1\xC7\xCD\xE5\xEF\u0102\u0113\u0115\u0124\u0138\u0142"+
		"\u014A\u0151\u015B\u0162\u0169";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QasmParser.__ATN) {
			QasmParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QasmParser._serializedATN));
		}

		return QasmParser.__ATN;
	}

}

export class CodeContext extends ParserRuleContext {
	public sentences(): SentencesContext | undefined {
		return this.tryGetRuleContext(0, SentencesContext);
	}
	public headers(): HeadersContext | undefined {
		return this.tryGetRuleContext(0, HeadersContext);
	}
	public clean(): CleanContext | undefined {
		return this.tryGetRuleContext(0, CleanContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_code; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterCode) listener.enterCode(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitCode) listener.exitCode(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitCode) return visitor.visitCode(this);
		else return visitor.visitChildren(this);
	}
}


export class HeadersContext extends ParserRuleContext {
	public QasmDescriptor(): TerminalNode | undefined { return this.tryGetToken(QasmParser.QasmDescriptor, 0); }
	public Include(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Include, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_headers; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterHeaders) listener.enterHeaders(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitHeaders) listener.exitHeaders(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitHeaders) return visitor.visitHeaders(this);
		else return visitor.visitChildren(this);
	}
}


export class SentencesContext extends ParserRuleContext {
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public sentences(): SentencesContext | undefined {
		return this.tryGetRuleContext(0, SentencesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_sentences; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterSentences) listener.enterSentences(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitSentences) listener.exitSentences(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitSentences) return visitor.visitSentences(this);
		else return visitor.visitChildren(this);
	}
}


export class CleanContext extends ParserRuleContext {
	public Clean(): TerminalNode { return this.getToken(QasmParser.Clean, 0); }
	public EOF(): TerminalNode { return this.getToken(QasmParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_clean; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterClean) listener.enterClean(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitClean) listener.exitClean(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitClean) return visitor.visitClean(this);
		else return visitor.visitChildren(this);
	}
}


export class SentenceContext extends ParserRuleContext {
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(QasmParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_sentence; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterSentence) listener.enterSentence(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitSentence) listener.exitSentence(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitSentence) return visitor.visitSentence(this);
		else return visitor.visitChildren(this);
	}
}


export class DefinitionContext extends ParserRuleContext {
	public _Id: Token;
	public Qreg(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Qreg, 0); }
	public Id(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Id, 0); }
	public qLine(): QLineContext | undefined {
		return this.tryGetRuleContext(0, QLineContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Semi, 0); }
	public Creg(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Creg, 0); }
	public gateDefinition(): GateDefinitionContext | undefined {
		return this.tryGetRuleContext(0, GateDefinitionContext);
	}
	public opaqueDefinition(): OpaqueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, OpaqueDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_definition; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterDefinition) listener.enterDefinition(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitDefinition) listener.exitDefinition(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitDefinition) return visitor.visitDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public measure(): MeasureContext | undefined {
		return this.tryGetRuleContext(0, MeasureContext);
	}
	public Semi(): TerminalNode { return this.getToken(QasmParser.Semi, 0); }
	public customArglist(): CustomArglistContext | undefined {
		return this.tryGetRuleContext(0, CustomArglistContext);
	}
	public cxGate(): CxGateContext | undefined {
		return this.tryGetRuleContext(0, CxGateContext);
	}
	public barrierGate(): BarrierGateContext | undefined {
		return this.tryGetRuleContext(0, BarrierGateContext);
	}
	public resetGate(): ResetGateContext | undefined {
		return this.tryGetRuleContext(0, ResetGateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_expression; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionalContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(QasmParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(QasmParser.LeftParen, 0); }
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public Equals(): TerminalNode { return this.getToken(QasmParser.Equals, 0); }
	public Int(): TerminalNode { return this.getToken(QasmParser.Int, 0); }
	public RightParen(): TerminalNode { return this.getToken(QasmParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_conditional; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterConditional) listener.enterConditional(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitConditional) listener.exitConditional(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitConditional) return visitor.visitConditional(this);
		else return visitor.visitChildren(this);
	}
}


export class QLineContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(QasmParser.LeftBrace, 0); }
	public Int(): TerminalNode { return this.getToken(QasmParser.Int, 0); }
	public RightBrace(): TerminalNode { return this.getToken(QasmParser.RightBrace, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_qLine; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterQLine) listener.enterQLine(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitQLine) listener.exitQLine(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitQLine) return visitor.visitQLine(this);
		else return visitor.visitChildren(this);
	}
}


export class GateDefinitionContext extends ParserRuleContext {
	public _Id: Token;
	public Gate(): TerminalNode { return this.getToken(QasmParser.Gate, 0); }
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public gateDefinitionArguments(): GateDefinitionArgumentsContext {
		return this.getRuleContext(0, GateDefinitionArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_gateDefinition; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterGateDefinition) listener.enterGateDefinition(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitGateDefinition) listener.exitGateDefinition(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitGateDefinition) return visitor.visitGateDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class OpaqueDefinitionContext extends ParserRuleContext {
	public _Id: Token;
	public Opaque(): TerminalNode { return this.getToken(QasmParser.Opaque, 0); }
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public opaqueDefinitionArguments(): OpaqueDefinitionArgumentsContext {
		return this.getRuleContext(0, OpaqueDefinitionArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_opaqueDefinition; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterOpaqueDefinition) listener.enterOpaqueDefinition(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitOpaqueDefinition) listener.exitOpaqueDefinition(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitOpaqueDefinition) return visitor.visitOpaqueDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class GateDefinitionArgumentsContext extends ParserRuleContext {
	public paramsList(): ParamsListContext[];
	public paramsList(i: number): ParamsListContext;
	public paramsList(i?: number): ParamsListContext | ParamsListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamsListContext);
		} else {
			return this.getRuleContext(i, ParamsListContext);
		}
	}
	public LeftCurlyBrace(): TerminalNode { return this.getToken(QasmParser.LeftCurlyBrace, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public RightCurlyBrace(): TerminalNode { return this.getToken(QasmParser.RightCurlyBrace, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_gateDefinitionArguments; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterGateDefinitionArguments) listener.enterGateDefinitionArguments(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitGateDefinitionArguments) listener.exitGateDefinitionArguments(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitGateDefinitionArguments) return visitor.visitGateDefinitionArguments(this);
		else return visitor.visitChildren(this);
	}
}


export class OpaqueDefinitionArgumentsContext extends ParserRuleContext {
	public paramsList(): ParamsListContext[];
	public paramsList(i: number): ParamsListContext;
	public paramsList(i?: number): ParamsListContext | ParamsListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamsListContext);
		} else {
			return this.getRuleContext(i, ParamsListContext);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_opaqueDefinitionArguments; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterOpaqueDefinitionArguments) listener.enterOpaqueDefinitionArguments(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitOpaqueDefinitionArguments) listener.exitOpaqueDefinitionArguments(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitOpaqueDefinitionArguments) return visitor.visitOpaqueDefinitionArguments(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamsListContext extends ParserRuleContext {
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Comma, 0); }
	public paramsList(): ParamsListContext | undefined {
		return this.tryGetRuleContext(0, ParamsListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_paramsList; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterParamsList) listener.enterParamsList(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitParamsList) listener.exitParamsList(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitParamsList) return visitor.visitParamsList(this);
		else return visitor.visitChildren(this);
	}
}


export class BodyContext extends ParserRuleContext {
	public bodyExpression(): BodyExpressionContext {
		return this.getRuleContext(0, BodyExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_body; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterBody) listener.enterBody(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitBody) listener.exitBody(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitBody) return visitor.visitBody(this);
		else return visitor.visitChildren(this);
	}
}


export class BodyExpressionContext extends ParserRuleContext {
	public Cx(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Cx, 0); }
	public paramsList(): ParamsListContext {
		return this.getRuleContext(0, ParamsListContext);
	}
	public Semi(): TerminalNode { return this.getToken(QasmParser.Semi, 0); }
	public U(): TerminalNode | undefined { return this.tryGetToken(QasmParser.U, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.LeftParen, 0); }
	public paramsListBody(): ParamsListBodyContext | undefined {
		return this.tryGetRuleContext(0, ParamsListBodyContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.RightParen, 0); }
	public Id(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Id, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_bodyExpression; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterBodyExpression) listener.enterBodyExpression(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitBodyExpression) listener.exitBodyExpression(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitBodyExpression) return visitor.visitBodyExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamsListBodyContext extends ParserRuleContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public paramsListBody(): ParamsListBodyContext | undefined {
		return this.tryGetRuleContext(0, ParamsListBodyContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Comma, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_paramsListBody; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterParamsListBody) listener.enterParamsListBody(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitParamsListBody) listener.exitParamsListBody(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitParamsListBody) return visitor.visitParamsListBody(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpContext extends ParserRuleContext {
	public Int(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Int, 0); }
	public Real(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Real, 0); }
	public Pi(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Pi, 0); }
	public Id(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Id, 0); }
	public unaryOp(): UnaryOpContext | undefined {
		return this.tryGetRuleContext(0, UnaryOpContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.LeftParen, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_exp; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterExp) listener.enterExp(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitExp) listener.exitExp(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitExp) return visitor.visitExp(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryOpContext extends ParserRuleContext {
	public Sin(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Sin, 0); }
	public Cos(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Cos, 0); }
	public Tan(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Tan, 0); }
	public Exp(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Exp, 0); }
	public Ln(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Ln, 0); }
	public Sqrt(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Sqrt, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_unaryOp; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterUnaryOp) listener.enterUnaryOp(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitUnaryOp) listener.exitUnaryOp(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitUnaryOp) return visitor.visitUnaryOp(this);
		else return visitor.visitChildren(this);
	}
}


export class MeasureContext extends ParserRuleContext {
	public _q: Token;
	public _c: Token;
	public Measure(): TerminalNode { return this.getToken(QasmParser.Measure, 0); }
	public qubit(): QubitContext | undefined {
		return this.tryGetRuleContext(0, QubitContext);
	}
	public Assign(): TerminalNode { return this.getToken(QasmParser.Assign, 0); }
	public cbit(): CbitContext | undefined {
		return this.tryGetRuleContext(0, CbitContext);
	}
	public Id(): TerminalNode[];
	public Id(i: number): TerminalNode;
	public Id(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QasmParser.Id);
		} else {
			return this.getToken(QasmParser.Id, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_measure; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterMeasure) listener.enterMeasure(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitMeasure) listener.exitMeasure(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitMeasure) return visitor.visitMeasure(this);
		else return visitor.visitChildren(this);
	}
}


export class QubitContext extends ParserRuleContext {
	public _Id: Token;
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public qLine(): QLineContext {
		return this.getRuleContext(0, QLineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_qubit; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterQubit) listener.enterQubit(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitQubit) listener.exitQubit(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitQubit) return visitor.visitQubit(this);
		else return visitor.visitChildren(this);
	}
}


export class CbitContext extends ParserRuleContext {
	public _Id: Token;
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public qLine(): QLineContext {
		return this.getRuleContext(0, QLineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_cbit; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterCbit) listener.enterCbit(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitCbit) listener.exitCbit(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitCbit) return visitor.visitCbit(this);
		else return visitor.visitChildren(this);
	}
}


export class CustomArglistContext extends ParserRuleContext {
	public _Id: Token;
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.LeftParen, 0); }
	public paramsListNumber(): ParamsListNumberContext | undefined {
		return this.tryGetRuleContext(0, ParamsListNumberContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(QasmParser.RightParen, 0); }
	public qubitAndQregList(): QubitAndQregListContext {
		return this.getRuleContext(0, QubitAndQregListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_customArglist; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterCustomArglist) listener.enterCustomArglist(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitCustomArglist) listener.exitCustomArglist(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitCustomArglist) return visitor.visitCustomArglist(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamsListNumberContext extends ParserRuleContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public paramsListNumber(): ParamsListNumberContext | undefined {
		return this.tryGetRuleContext(0, ParamsListNumberContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Comma, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_paramsListNumber; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterParamsListNumber) listener.enterParamsListNumber(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitParamsListNumber) listener.exitParamsListNumber(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitParamsListNumber) return visitor.visitParamsListNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class QubitAndQregListContext extends ParserRuleContext {
	public qbitOrQreg(): QbitOrQregContext {
		return this.getRuleContext(0, QbitOrQregContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Comma, 0); }
	public qubitAndQregList(): QubitAndQregListContext | undefined {
		return this.tryGetRuleContext(0, QubitAndQregListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_qubitAndQregList; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterQubitAndQregList) listener.enterQubitAndQregList(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitQubitAndQregList) listener.exitQubitAndQregList(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitQubitAndQregList) return visitor.visitQubitAndQregList(this);
		else return visitor.visitChildren(this);
	}
}


export class QbitOrQregContext extends ParserRuleContext {
	public _Id: Token;
	public Id(): TerminalNode { return this.getToken(QasmParser.Id, 0); }
	public qLine(): QLineContext | undefined {
		return this.tryGetRuleContext(0, QLineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_qbitOrQreg; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterQbitOrQreg) listener.enterQbitOrQreg(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitQbitOrQreg) listener.exitQbitOrQreg(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitQbitOrQreg) return visitor.visitQbitOrQreg(this);
		else return visitor.visitChildren(this);
	}
}


export class CxGateContext extends ParserRuleContext {
	public Cx(): TerminalNode { return this.getToken(QasmParser.Cx, 0); }
	public qubitAndQregList(): QubitAndQregListContext {
		return this.getRuleContext(0, QubitAndQregListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_cxGate; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterCxGate) listener.enterCxGate(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitCxGate) listener.exitCxGate(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitCxGate) return visitor.visitCxGate(this);
		else return visitor.visitChildren(this);
	}
}


export class BarrierGateContext extends ParserRuleContext {
	public _Id: Token;
	public Barrier(): TerminalNode { return this.getToken(QasmParser.Barrier, 0); }
	public Id(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Id, 0); }
	public qubitList(): QubitListContext | undefined {
		return this.tryGetRuleContext(0, QubitListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_barrierGate; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterBarrierGate) listener.enterBarrierGate(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitBarrierGate) listener.exitBarrierGate(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitBarrierGate) return visitor.visitBarrierGate(this);
		else return visitor.visitChildren(this);
	}
}


export class QubitListContext extends ParserRuleContext {
	public qubit(): QubitContext {
		return this.getRuleContext(0, QubitContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Comma, 0); }
	public qubitList(): QubitListContext | undefined {
		return this.tryGetRuleContext(0, QubitListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_qubitList; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterQubitList) listener.enterQubitList(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitQubitList) listener.exitQubitList(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitQubitList) return visitor.visitQubitList(this);
		else return visitor.visitChildren(this);
	}
}


export class ResetGateContext extends ParserRuleContext {
	public _Id: Token;
	public Reset(): TerminalNode { return this.getToken(QasmParser.Reset, 0); }
	public Id(): TerminalNode | undefined { return this.tryGetToken(QasmParser.Id, 0); }
	public qubit(): QubitContext | undefined {
		return this.tryGetRuleContext(0, QubitContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QasmParser.RULE_resetGate; }
	@Override
	public enterRule(listener: QasmParserListener): void {
		if (listener.enterResetGate) listener.enterResetGate(this);
	}
	@Override
	public exitRule(listener: QasmParserListener): void {
		if (listener.exitResetGate) listener.exitResetGate(this);
	}
	@Override
	public accept<Result>(visitor: QasmParserVisitor<Result>): Result {
		if (visitor.visitResetGate) return visitor.visitResetGate(this);
		else return visitor.visitChildren(this);
	}
}


